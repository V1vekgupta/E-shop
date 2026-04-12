# 🛒 E-shop: Enterprise Multi-Vendor Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=spring)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)

A full-stack multi-vendor e-commerce platform enabling **customers, sellers, and admins** to manage products, orders, and payments efficiently.

---

## 📑 Table of Contents
- [Description](#-description)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Variables Setup](#-environment-variables-setup)
- [Screenshots](#-screenshots)

---

## 📝 Description

- Full-stack e-commerce platform built using **Spring Boot, React, and Redux**
- Implemented secure authentication using **JWT and Role-Based Access Control (RBAC)**
- Integrated **Stripe payment gateway** for secure online transactions
- Designed scalable database using **PostgreSQL with JPA/Hibernate**
- Supports advanced features like **pagination, sorting, and search**

---

## ✨ Features

- Multi-vendor platform with **Customer, Seller, and Admin roles and dashboard**  
- Secure authentication with **JWT & RBAC**  
- Integrated **Stripe payment system**  
- RESTful APIs using **Spring Boot**  
- Responsive UI with **React & Tailwind CSS**  
- Advanced features like **pagination, filtering, and search**

---

## 🛠️ Tech Stack

**Frontend:** React, Redux, Tailwind CSS  
**Backend:** Spring Boot, Spring Security (JWT)  
**Database:** PostgreSQL, JPA/Hibernate  
**Payment:** Stripe  
**Tools:** Git, Maven, REST APIs  

---

## 📂 Project Structure

- `sb-ecom/` → Spring Boot backend  
- `ecom-frontend/` → React frontend  

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/V1vekgupta/E-shop.git

# Navigate to project directory
cd E-shop

# ---------------------------
# Backend Setup (Spring Boot)
# ---------------------------
cd sb-ecom
./mvnw spring-boot:run

# ---------------------------
# Frontend Setup (React)
# ---------------------------
cd ../ecom-frontend
npm install
npm run dev
```

> ⚠️ Make sure PostgreSQL is running before starting backend

---

## 🔐 Environment Variables Setup

Create a `.env` file in both **backend** and **frontend** directories and add the following:

### ⚙️ Backend (`sb-ecom/.env`)
```env
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/eshop
SPRING_DATASOURCE_USERNAME=your_db_username
SPRING_DATASOURCE_PASSWORD=your_db_password

SPRING_APP_JWT_SECRET=your_jwt_secret
SPRING_APP_JWT_EXPIRATION_MS=300000000

STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 💻 Frontend (`ecom-frontend/.env`)
```env
VITE_BACK_END_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
```

> ⚠️ Never commit `.env` files to GitHub. Use `.env.example` instead.

---


## 📸 Screenshots

> Replace these placeholders with actual screenshots of your application

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Home+Page" width="80%"/>
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Admin+Dashboard" width="80%"/>
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Checkout+Page" width="80%"/>
</p>

---

## 🌟 Future Improvements

- Add product recommendation system  
- Implement order tracking system  
- Improve UI/UX with animations  
- Deploy using Docker & CI/CD  

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.
