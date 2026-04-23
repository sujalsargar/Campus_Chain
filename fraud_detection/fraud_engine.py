import mysql.connector
import networkx as nx

# Connect to MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Sujal@27",
    database="campuschain"
)

cursor = db.cursor()

# Get transactions
cursor.execute("SELECT sender, receiver, amount FROM transactions")
rows = cursor.fetchall()

# Build graph
G = nx.DiGraph()

for sender, receiver, amount in rows:
    G.add_edge(sender, receiver, weight=amount)

# Calculate centrality
centrality = nx.degree_centrality(G)

risk_scores = {}

for node in G.nodes():
    
    risk = centrality[node]

    # suspicious behavior
    if G.out_degree(node) > 3:
        risk += 0.3

    if G.in_degree(node) > 3:
        risk += 0.2

    risk_scores[node] = min(risk,1)

# Update database
for user_id, score in risk_scores.items():

    cursor.execute(
        "UPDATE users SET riskScore=%s WHERE id=%s",
        (score, user_id)
    )

db.commit()

print("Fraud analysis complete")
print(risk_scores)