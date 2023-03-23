import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Book, Contact, FAQ, Home, Layout, Service } from "@/pages";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/default";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <AnimatePresence>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/service"} element={<Service />} />
            <Route path={"/faq"} element={<FAQ />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/book"} element={<Book />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AnimatePresence>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
