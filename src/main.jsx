import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// 1. استيراد المكتبة
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 2. إنشاء instance جديد
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 3. تغليف التطبيق بالـ Provider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
