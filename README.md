# Shopee Clone

A responsive e-commerce front-end inspired by Shopee, built with **React 19**, **TypeScript** and **Vite**. It covers the core shopping flow: browsing products, viewing details, managing a cart, and handling user accounts.

> This project is for learning purposes only and is non-commercial. It is not affiliated with Shopee.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel)](https://shopee-clone-flax.vercel.app)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Live demo:** https://shopee-clone-flax.vercel.app

## Features

- **Authentication**: register and log in, with route guards that redirect guests to the login page and signed-in users away from it
- **Product catalog**: browse products and open a detailed product page
- **Shopping cart**: add items and manage them on a dedicated cart page
- **User account**: update profile (with avatar upload), change password, view purchase history
- **Internationalization**: multi-language support via i18next
- **Form validation**: schema-based validation with React Hook Form and Yup
- **Performance**: route-level code splitting with `React.lazy` and `Suspense`
- **Security**: product descriptions are sanitized with DOMPurify before rendering

## Tech Stack

| Area | Technologies |
| --- | --- |
| Core | React 19, TypeScript, Vite |
| Routing | React Router v7 |
| Data fetching | TanStack Query (React Query), Axios |
| Forms | React Hook Form, Yup |
| Styling | Tailwind CSS v4, Floating UI, Motion |
| i18n | i18next, react-i18next |
| UX utilities | React Toastify, React Helmet Async |
| Code quality | ESLint, Prettier (with Tailwind plugin), EditorConfig |
| Deployment | Vercel |

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Product list | Public |
| `/:nameId` | Product detail | Public |
| `/login`, `/register` | Authentication | Guests only |
| `/cart` | Shopping cart | Authenticated |
| `/user/profile` | Profile | Authenticated |
| `/user/password` | Change password | Authenticated |
| `/user/purchase` | Purchase history | Authenticated |

## Getting Started

### Prerequisites

- Node.js 20.19+ (or 22.12+)
- [Yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/tminhbao/shopee-clone.git
cd shopee-clone

# Install dependencies
yarn install

# Start the dev server
yarn dev
```

The app runs at http://localhost:3000.

No environment variables are required. The API base URL is set in `src/constants/config.ts`.

### Available Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the development server |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Preview the production build locally |
| `yarn lint` | Lint the source code |
| `yarn lint:fix` | Lint and auto-fix issues |
| `yarn prettier` | Check code formatting |
| `yarn prettier:fix` | Format the code |

## Project Structure

```
shopee-clone/
├── public/                  # Static assets
├── src/
│   ├── constants/           # Routes, API config
│   ├── contexts/            # Global app state (auth)
│   ├── layouts/             # Main, Register, Cart, User layouts
│   ├── pages/               # Login, Register, ProductList, ProductDetail,
│   │                        # Cart, Profile, ChangePassword, HistoryPurchase, NotFound
│   └── useRouteElements.tsx # Route definitions and guards
├── vite.config.ts
└── package.json
```

## API

The app consumes a public e-commerce REST API: [`api-ecom.duthanhduoc.com`](https://api-ecom.duthanhduoc.com/). Credit to its author for providing the backend for learning projects.

## Author

**Tran Minh Bao**, Fullstack / Web Developer

- GitHub: [@tminhbao](https://github.com/tminhbao)

## License

This project is intended for educational use. Feel free to use it as a reference for learning.
