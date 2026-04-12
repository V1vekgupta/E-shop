<div align="center">

<h1>🛒 E-shop</h1>
<h3>Enterprise Multi-Vendor E-Commerce Platform</h3>

<p>
  <img src="https://img.shields.io/badge/Status-Active-22c55e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PRs-Welcome-orange?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
</p>

> A production-grade, full-stack multi-vendor e-commerce application with role-based access control, Stripe payment processing, and scalable REST APIs — built from the ground up using Spring Boot and React.

**[Live Demo](#)** · **[Report Bug](https://github.com/V1vekgupta/E-shop/issues)**

</div>

---

## 📑 Table of Contents
- [Description](#-description)
- [What Makes This Stand Out](#-what-makes-this-stand-out)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)

---

## 📝 Description

A production-grade marketplace built with **Spring Boot, React, and Redux**, featuring separate portals for customers, sellers, and admins. Implements enterprise-level security using **Spring Security with JWT and RBAC**, a **Stripe payment gateway** for real transactions, and a scalable **PostgreSQL** database with advanced querying capabilities.

---

## 🎯 What Makes This Stand Out

| Capability | Details |
|---|---|
| 🔐 **Security & Auth** | Spring Security with JWT tokens and role-based access control (RBAC) across 3 user roles — Customer, Seller, Admin |
| 💳 **Payment Processing** | Stripe API integration — generates client secret, processes card payments, and confirms orders end-to-end |
| 🗄️ **Database Design** | Complex JPA/Hibernate entity relationships across PostgreSQL — Products, Categories, Orders, Carts, Addresses |
| 🔍 **Advanced Querying** | Server-side pagination, multi-field sorting (`sortBy`, `sortOrder`), keyword search, and category filtering |
| 🖼️ **Image Management** | Product image upload and update via multipart form data |
| 👥 **Multi-Role Platform** | Three complete portals with role-scoped REST APIs (`/api/public`, `/api/admin`, `/api/user`) |

---

## ✨ Features

### 👤 Customer
- Browse, search, and filter products by keyword or category
- Add/remove products from cart and update quantities
- Save and manage multiple delivery addresses
- Checkout securely via Stripe and place orders

### 🏪 Seller / Admin
- Add, update, and delete products under specific categories
- Upload and update product images
- Manage categories across the platform
- Access admin-only protected endpoints via RBAC

### 🔐 Authentication
- Sign up with role assignment (`user`,`seller`, `admin`)
- Sign in to receive JWT token for protected routes
- Sign out and session management

---

## 🛠️ Tech Stack

**Frontend:** React, Redux Toolkit, React Router, Tailwind CSS, Axios, Stripe.js

**Backend:** Spring Boot, Spring Security (JWT + RBAC), JPA / Hibernate, Maven

**Database:** PostgreSQL

**Payment:** Stripe API

**Tools:** Postman, Git

---

## 📂 Project Structure

```
E-shop/
├── sb-ecom/                        # Spring Boot Backend
│   ├── src/main/java/com/ecom/
│   │   ├── controller/             # REST endpoints
│   │   ├── service/                # Business logic
│   │   ├── repository/             # Data access (JPA)
│   │   ├── model/                  # JPA entities
│   │   ├── dto/                    # Data transfer objects
│   │   ├── security/               # JWT filter & Spring Security config
│   │   └── config/                 # App configuration
│   └── src/main/resources/
│       └── application.properties
│
└── ecom-frontend/                  # React Frontend
    ├── src/
    │   ├── components/             # Reusable UI components
    │   ├── pages/                  # Route-level views
    │   ├── store/                  # Redux slices & store
    │   ├── services/               # Axios API calls
    │   └── utils/                  # Helpers & constants
    └── public/
```

---

## 🔑 API Reference

> All protected routes require `Authorization: Bearer <JWT>` header.

### Authentication
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | Public | Register with role (`user` / `admin`) |
| `POST` | `/api/auth/signin` | Public | Login and receive JWT |
| `POST` | `/api/auth/signout` | Public | Sign out |
| `GET` | `/api/auth/user` | Auth | Get current user info |

### Products
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/public/products` | Public | Get all products (paginated, sortable) |
| `GET` | `/api/public/products/keyword/{keyword}` | Public | Search products by keyword |
| `GET` | `/api/public/categories/{id}/products` | Public | Get products by category |
| `POST` | `/api/admin/categories/{id}/product` | Admin | Add product to a category |
| `PUT` | `/api/admin/products/{id}` | Admin | Update product details |
| `PUT` | `/api/products/{id}/image` | Admin | Update product image |
| `DELETE` | `/api/admin/products/{id}` | Admin | Delete a product |

### Categories
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/public/categories` | Public | Get all categories |
| `POST` | `/api/public/categories` | Auth | Create a category |
| `PUT` | `/api/public/categories/{id}` | Auth | Update a category |
| `DELETE` | `/api/admin/categories/{id}` | Admin | Delete a category |

### Cart
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/carts/products/{productId}/quantity/{qty}` | Auth | Add product to cart |
| `GET` | `/api/carts/users/cart` | Auth | Get current user's cart |
| `PUT` | `/api/cart/products/{id}/quantity/delete` | Auth | Update product quantity |
| `DELETE` | `/api/carts/{cartId}/product/{productId}` | Auth | Remove product from cart |

### Addresses
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/addresses` | Auth | Create a new address |
| `GET` | `/api/addresses` | Auth | Get all addresses |
| `GET` | `/api/users/addresses` | Auth | Get current user's addresses |
| `PUT` | `/api/addresses/{id}` | Auth | Update an address |
| `DELETE` | `/api/addresses/{id}` | Auth | Delete an address |

### Orders & Payment
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/order/stripe-client-secret` | Auth | Generate Stripe client secret |
| `POST` | `/api/order/users/payments/{paymentMethod}` | Auth | Place order with Stripe payment details |

---

## ⚡ Quick Start

### Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL 14+
- Maven 3.8+

```bash
# 1. Clone the repo
git clone https://github.com/V1vekgupta/E-shop.git
cd E-shop

# 2. Start the backend
cd sb-ecom
cp .env.example .env       # Fill in your credentials
./mvnw spring-boot:run

# 3. Start the frontend (new terminal)
cd ../ecom-frontend
cp .env.example .env       # Fill in your credentials
npm install
npm run dev
```

> ⚠️ Make sure PostgreSQL is running and the `eshop` database is created before starting the backend.

---

## 🔐 Environment Variables

### Backend — `sb-ecom/.env`
```env
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/eshop
SPRING_DATASOURCE_USERNAME=your_db_username
SPRING_DATASOURCE_PASSWORD=your_db_password

SPRING_APP_JWT_SECRET=your_jwt_secret_minimum_256_bits
SPRING_APP_JWT_EXPIRATION_MS=300000000

STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

### Frontend — `ecom-frontend/.env`
```env
VITE_BACK_END_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_publishable_key
```

> ⚠️ Never commit `.env` files. Add `.env` to `.gitignore` and use `.env.example` as a committed template.

---

## 📸 Screenshots

> Replace these with actual screenshots of your running application

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Home+Page" width="80%"/>
  <br/><em>Customer Storefront</em>
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Product+Listing+with+Filter+%26+Search" width="80%"/>
  <br/><em>Product Listing — Paginated, Sortable, Searchable</em>
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Cart+%26+Checkout" width="80%"/>
  <br/><em>Cart & Stripe Checkout Flow</em>
</p>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Admin+Panel" width="80%"/>
  <br/><em>Admin Panel — Product & Category Management</em>
</p>

---

## 🌟 Future Improvements

- Deploy using Docker & CI/CD pipeline (GitHub Actions)
- Add product recommendation system
- Implement real-time order tracking
- Add email notifications for order confirmation
- Improve UI/UX with animations and transitions
- Write unit and integration tests (JUnit 5, Mockito, React Testing Library)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ by **[Vivek Gupta](https://github.com/V1vekgupta)**

⭐ Star this repo if you found it useful!

</div>
