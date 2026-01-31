# NestFinder

**AI-Powered Real Estate Assistant.** 

NestFinder is a modern, responsive single-page application (SPA) designed to simplify the home buying and selling process. It features a simplified "minimal" aesthetic, dark mode support, and an intuitive user flow for both buyers and sellers.

![NestFinder Hero](public/hero-placeholder.png) *Note: Add a screenshot here*

## 🚀 Features

*   **Role-Based Workflows**: Dedicated paths for Buyers (Strategist -> Hunter -> Closer) and Sellers (Dashboard).
*   **Modern UI/UX**: Built with a "glassmorphism" aesthetic, smooth animations (Framer Motion), and responsive design.
*   **Dark Mode**: Fully supported dark theme with a toggle.
*   **Interactive Dashboard**: Seller dashboard to manage listings (Add/Remove properties).
*   **Smart Forms**: Simplified step-by-step forms for better user experience.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Routing**: [React Router](https://reactrouter.com/)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/nestfinder-v2.git
    cd nestfinder-v2
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    The app will open at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
nestfinder-v2/
├── src/
│   ├── components/     # Reusable UI components (Layout, ThemeToggle, etc.)
│   ├── pages/          # Main page views (Landing, Buyer, Seller)
│   ├── lib/            # Utilities (clsx/tailwind-merge)
│   ├── App.jsx         # Main router setup
│   └── main.jsx        # Entry point
├── public/             # Static assets
└── index.html          # HTML entry
```

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
