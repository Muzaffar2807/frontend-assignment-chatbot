import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "../containers/Home/Home";
import Checkout from "../containers/Checkout/CheckoutPage";
import ChatPage from "../containers/ChatBot/ChatPage";

import AuthLayout from "../layouts/AuthLayout";

export default function CustomRoutes() {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page3" element={<Checkout />} />
        <Route path="/chatbot" element={<ChatPage />} />
      </Routes>
    </AuthLayout>
  );
}
