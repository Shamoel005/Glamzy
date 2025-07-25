
# 👗 Glamzy – AI-Powered Fashion E-commerce Platform

**Glamzy** is a full-stack fashion e-commerce website built using the **MERN stack**. It allows users to shop for men's, women's, and kids' clothing with the help of an integrated **AI chatbot** and **voice-controlled assistant** for smooth navigation and smart interaction. A secured **admin dashboard** helps manage products, users, and orders.

🌐 **Live Site:** [glamzy-frontend.onrender.com](https://glamzy-frontend.onrender.com)  
🔐 *Admin panel access is private. Demo access available on request.*

---

## ✨ Features

### 👤 User Side
- View and shop categorized fashion collections
- Voice assistant (Web Speech API) for spoken commands like “open cart”
- Register/login via email-password or Google (Firebase Auth)
- View cart, place orders, track previous purchases
- Responsive UI with Tailwind CSS

### 🛠️ Admin Panel
- View all customer orders and track delivery status
- Add/update/delete products by category
- Role-based access using JWT tokens
- Secure, protected routing for admins only

---

## ⚙️ Tech Stack

**Frontend:** React.js, Tailwind CSS, React Router, Axios, Toastify  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT  
**AI & Auth:** OpenAI API, Web Speech API, Firebase Google OAuth

---

## 🚀 Installation

### 🔧 Backend Setup
```bash
cd backend
npm install
# Create .env with:
# MONGODB_URI=...
# JWT_SECRET=...
npm start
````

### 💻 Frontend Setup

```bash
cd frontend
npm install
# Create .env with:
# VITE_SERVER_URL=...
# Firebase Config
npm run dev
```

---

## 🧠 Voice Commands

Try speaking:

* “Open search”
* “Go to homepage”
* “Open contact page”
* “Show my orders”
* “Open cart”

The AI voice assistant will respond and navigate accordingly.

---

## 📡 Deployment

* **Frontend:** [Render](https://render.com/)
* **Backend:** Render / Node-supported host
* **Database:** MongoDB Atlas




## 🤝 Contribution

Feel free to fork, improve, or report issues to contribute to Glamzy. PRs are welcome.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Shamoel Farooqui**
GitHub: [@Shamoel005](https://github.com/Shamoel005)

---

🔐 Admin panel access is restricted. Demo access can be shared upon request.




