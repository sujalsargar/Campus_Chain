# 💳 CampusChain Secure | Hackathon Project

## 📌 Project Overview

CampusChain Secure is a simple prototype of a campus payment system.

The main idea of this project is to allow students to send digital tokens to each other while detecting suspicious transactions using graph-based fraud detection.

This project is inspired by real-world systems like UPI fraud detection.

---

## 📂 System Description

The system includes:

- User registration and login  
- Digital wallet with token balance  
- Sending tokens between users  
- Transaction history storage  
- Fraud detection using graph analysis  

---

## ⚙️ Steps I Followed

### 1. Backend Setup

Created APIs using Node.js and Express for:

- User authentication  
- Wallet management  
- Token transfer  
- Admin dashboard  

---

### 2. Database Design

Used MySQL database with two main tables:

- Users (stores user details, balance, risk score)  
- Transactions (stores sender, receiver, amount, timestamp)  

---

### 3. Wallet System

- Each user gets an initial token balance  
- Users can send tokens to other users  
- Balance updates after every transaction  

---

### 4. Transaction Storage

Every transaction is stored with:

- Sender ID  
- Receiver ID  
- Amount  
- Timestamp  

---

### 5. Fraud Detection

Used Python and NetworkX to:

- Convert transactions into a graph  
- Detect patterns like:
  - Circular transactions  
  - Repeated transfers  
  - Highly connected accounts  

Each user is assigned a **risk score**.

---

### 6. Admin Dashboard

Admin can:

- View all users  
- Check balances and risk scores  
- View all transactions  
- See transaction network graph  

---

## 📊 Key Features

- Secure token transfer system  
- Real-time balance updates  
- Graph-based fraud detection  
- Risk score warning system  
- Transaction visualization  

---

## 🛠️ Technologies Used

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js (Express)  
- Database: MySQL  
- Fraud Detection: Python, NetworkX  
- Visualization: PyVis  

---

## 📁 Project Structure


campuschain/
├── backend/
├── frontend/
├── fraud_detection/
└── README.md


---

## 🎯 Conclusion

This project shows how digital payments can be made safer by analyzing transaction patterns instead of individual transactions.

It helped in understanding:

- Full-stack development  
- Database handling  
- API creation  
- Graph-based fraud detection  

---

## 🚀 How to Run the Project

### 1. Run Backend

```bash
cd backend
node server.js
2. Open Frontend

Open frontend/index.html using Live Server.

3. Run Fraud Detection
cd fraud_detection
python fraud_engine.py
4. View Graph
python graph_visualization.py
👨‍💻 Author

Sujal Vijay Sargar
Hackathon Project – CampusChain Secure
