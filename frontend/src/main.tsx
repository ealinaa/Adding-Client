import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
	<BrowserRouter>
	<Navbar/>
			
	<App />
		
	</BrowserRouter>
	</React.StrictMode>
);