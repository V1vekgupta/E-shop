# E-shop: Enterprise Multi-Vendor Platform
## 📑 Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables Setup](#Environment-Variables-Setup)
- [Screenshots](#screenshots)


## 📝 Description

• Full-Stack E-commerce Solution: Developed a production-grade marketplace using Spring Boot, React, and Redux. Implemented microservices with separate customer, admin, and seller portals with real-time inventory management.

• Advanced Security & Payment Processing: Integrated enterprise-level authentication using Spring Security with JWT tokens and role-based access control (RBAC). Implemented secure payment gateway integration with Stripe API.

• Scalable Database Architecture: Designed complex entity relationships using JPA/Hibernate across PostgreSQL databases. Implemented advanced features including pagination, sorting and search.

## ✨ Features

- Multi-vendor e-commerce platform with Customer, Seller, and Admin roles  
- Secure authentication using JWT and Role-Based Access Control (RBAC)  
- Integrated Stripe payment gateway for seamless online transactions  
- RESTful APIs built with Spring Boot and optimized database using JPA/Hibernate  
- Responsive frontend using React with real-time cart and product management
- Implemented advanced features including pagination, sorting and search 


## 🛠️ Tech Stack

**Frontend:** React, Redux, Tailwind CSS  
**Backend:** Spring Boot, Spring Security (JWT)  
**Database:** PostgreSQL, JPA/Hibernate  
**Payment:** Stripe  
**Tools:** Git, Maven, REST APIs  

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

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **preview**: `npm run preview`


## 📸 Screenshots

> **Tip:** You can auto-generate a beautiful project mockup image using the **Screenshot** button above!

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Main+Application+View" alt="Main Application View" width="80%"/>
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Feature+Showcase" alt="Feature Showcase" width="80%"/>
</p>

