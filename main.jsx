// Archivo principal para renderizar la aplicación
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components.jsx";
import "./styles/styles.css";
import "./galaxy-style.css";

const root = document.getElementById("root");
if (root) {
    createRoot(root).render(<App />);
}