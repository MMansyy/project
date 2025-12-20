# Mansy Project

A simple and elegant user authentication and e-commerce web application built with vanilla JavaScript, HTML, and Bootstrap.

## 📋 Features

### User Authentication
- **User Registration**: Create a new account with username, email, and password validation
- **User Login**: Secure login system with credential verification
- **Form Validation**: Real-time input validation with visual feedback
- **Cookie-based Session**: User data stored securely in browser cookies

### E-commerce Features
- **Product Catalog**: Browse a wide range of products
- **Image Slider**: Auto-playing carousel showcasing featured products
- **Product Cards**: Grid layout displaying product thumbnails and descriptions
- **Product Details**: Detailed view with pricing, specifications, and availability
- **Responsive Design**: Mobile-first design that works on all screen sizes

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling for product pages
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **Bootstrap 5.3.8**: Responsive UI framework
- **Font Awesome**: Icon library for UI elements
- **DummyJSON API**: External API for product data

## 📁 Project Structure

```
project/
├── index.html              # Login page (landing page)
├── src/
│   ├── js/
│   │   ├── Cookies.js      # Cookie management utilities
│   │   ├── login.js        # Login page logic
│   │   ├── signup.js       # Registration page logic
│   │   └── home.js         # Home page and product display logic
│   ├── pages/
│   │   ├── signup.html     # Registration page
│   │   └── home.html       # Products page with slider
│   └── style/
│       ├── home.css        # Home page styles
│       └── main.css        # Global styles
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MMansyy/project.git
   cd project
   ```

2. Open with a local web server (recommended):
   
   **Option 1: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   
   **Option 2: Using Node.js**
   ```bash
   npx http-server
   ```
   
   **Option 3: Using VS Code**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 💻 Usage

### 1. Registration

1. Open the application in your browser
2. Click on "Register" link on the login page
3. Fill in the registration form:
   - Username (minimum 3 characters)
   - Email (valid email format)
   - Password (minimum 6 characters)
   - Confirm Password (must match)
4. Click "Register" to create your account

### 2. Login

1. Enter your registered username and password
2. Click "Login" to access the home page

### 3. Browse Products

- View the auto-playing image slider showcasing featured products
- Scroll down to browse the product catalog
- Click "Show details" on any product card to view detailed information
- Click "Back to Products" to return to the catalog

## 🔐 Security Features

- Password length validation (minimum 6 characters)
- Email format validation
- Username uniqueness check
- Input sanitization and validation
- Client-side form validation with visual feedback

## 🎨 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (phones)
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🌐 API Integration

This project uses the [DummyJSON API](https://dummyjson.com/) to fetch product data:
- Endpoint: `https://dummyjson.com/products?limit=0`
- Provides realistic product data for demonstration purposes

## 📝 Form Validation Rules

### Registration
- **Username**: Required, minimum 3 characters
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Required, must match password

### Login
- **Username**: Required, minimum 3 characters
- **Password**: Required, minimum 6 characters

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**MMansyy**

---

Made with ❤️ using vanilla JavaScript and Bootstrap
