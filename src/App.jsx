import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Students from "./pages/Students.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  // Context API: read the current theme so the whole app can react to it
  const { theme } = useTheme();

  return (
    // Ternary Operator: switch the overall page background/text color based on Context theme
    <div className={`app-wrapper min-vh-100 ${theme === "dark" ? "bg-dark text-light" : ""}`}>
      <Navbar />

      {/* React Router: multiple routes, plus a catch-all 404 route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
