import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Đảm bảo App.tsx tồn tại và được import đúng cách
import "./styles/global.css"; // Kiểm tra file CSS nếu cần
import "./components/Navbar.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // Nếu trang vẫn trắng, thử xóa <React.StrictMode> và chỉ render <App />
);
