import mysql.connector
import networkx as nx
from pyvis.network import Network

# connect to mysql
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Sujal@27",
    database="campuschain"
)

cursor = db.cursor()

cursor.execute("SELECT sender,receiver,amount FROM transactions")

rows = cursor.fetchall()

G = nx.DiGraph()

for sender,receiver,amount in rows:
    G.add_edge(sender,receiver,label=str(amount))

net = Network(height="700px",width="100%",directed=True)

for node in G.nodes():
    net.add_node(node,label=f"User {node}")

for edge in G.edges(data=True):
    net.add_edge(edge[0],edge[1],label=edge[2]['label'])

net.write_html("transaction_graph.html")
print("Graph generated: transaction_graph.html")