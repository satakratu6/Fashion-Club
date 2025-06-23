# Fashion Club

## Overview
Fashion Club is an innovative web application designed to bring the latest trends in fashion to your fingertips. Our platform allows users to explore, discover, and shop for a wide range of fashion items, from clothing to accessories. With a user-friendly interface and seamless navigation, we aim to enhance your shopping experience.

## Features
- **User Authentication**: Secure login and registration for users
- **Product Catalog**: Browse through a diverse range of fashion items
- **Shopping Cart**: Add items to your cart and manage your purchases easily
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Search Functionality**: Quickly find your favorite products with our search feature

## Live Demo
Check out the live version of the Fashion Club application here: [Fashion Club Live](https://your-live-demo-url.com)

## Screenshots
![Screenshot 1](https://drive.google.com/file/d/1Z4Dhf2_ohiucog_IB4gROzxnRrU9yT7a/view?usp=sharing)
![Screenshot 2](https://drive.google.com/file/d/1uBt3VNa7ZpcePyxPrXx8MXFyuCdBgR3t/view?usp=sharing)
![Screenshot 3](https://drive.google.com/file/d/12X71Ll7H9HuFmoqyRmWs37qHbDEsaTTe/view?usp=sharing)

## Table of Contents
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Technology Stack
### Frontend
- HTML
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

## Installation
To get a local copy up and running, follow these steps.

### Prerequisites
- Node.js (v16.20.1 or later)
- npm (Bundled with Node.js)
- MongoDB (Local instance or MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/satakratu6/Fashion-Club.git
cd Fashion-Club
```
## 🛠️ Backend Setup

Navigate to the backend directory

Install dependencies:

```bash
npm install
```

Create a `.env` file with the following variables:

```env
DB_URI=your_mongodb_connection_string
PORT=8000
```

Start the backend server:

```bash
npm start
```

## 💻 Frontend Setup

Navigate to the frontend directory

Install dependencies:

```bash
npm install
```

Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

Build Tailwind CSS:

```bash
npm run build
```

Start the frontend development server:

```bash
npm start
```

## 🚀 Usage

Once both the backend and frontend are running:

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
- Explore the fashion items available on the platform
- Register or login to access all features

## 🧩 Troubleshooting

| Issue                      | Potential Cause                | Solution                                      |
|---------------------------|--------------------------------|-----------------------------------------------|
| Backend server not starting | Port already in use            | Change the `PORT` in `.env` file              |
| CORS errors                | Backend not configured for CORS | Ensure `cors` middleware is properly set up   |
| MongoDB connection errors | Incorrect `DB_URI`             | Double-check connection string and credentials |
| Tailwind CSS not working  | Incorrect configuration         | Verify `tailwind.config.js` and build process |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository
- Create your feature branch:
  ```bash
  git checkout -b feature/NewFeature
  ```
- Commit your changes:
  ```bash
  git commit -m 'Add some feature'
  ```
- Push to the branch:
  ```bash
  git push origin feature/NewFeature
  ```
- Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Node.js - JavaScript runtime
- Express - Web framework for Node.js
- MongoDB - NoSQL database
- Tailwind CSS - Utility-first CSS framework

## 📬 Contact

**Name:** Satakratu Chakraborty  
**Email:** [satakratu.madhu@gmail.com](mailto:satakratu.madhu@gmail.com)  
**GitHub:** [satakratu6](https://github.com/satakratu6)

---

Thank you for checking out Fashion Club! We hope you enjoy your experience.
