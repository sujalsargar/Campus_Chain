import mysql.connector
import random

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Sujal@27",
    database="campuschain"
)

cursor = db.cursor()

users = [1,2]

for i in range(30):

    sender = random.choice(users)
    receiver = random.choice(users)

    if sender != receiver:

        amount = random.randint(5,50)

        cursor.execute(
            "INSERT INTO transactions(sender,receiver,amount) VALUES (%s,%s,%s)",
            (sender,receiver,amount)
        )

db.commit()

print("Fake transactions generated")