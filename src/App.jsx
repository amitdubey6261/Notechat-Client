import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./components/homePage/HomePage.jsx";
import Collections from "./components/collections/Collections.jsx";
import AboutPage from "./components/aboutPage/AboutPage.jsx";
import ContactPage from "./components/contactPage/ContactPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/login/Login.jsx";
import ProductPage from "./components/productPage/ProductPage.jsx";
import CreateNote from "./components/createProduct/CreateNote.jsx";

import Store from "./Redux/Store";

import "./App.css";
import Register from "./components/login/Register.jsx";
import Admin from "./components/adminPage/Admin.jsx";
import Userdetails from "./components/adminPage/UserDetails/Userdetails.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <Provider store={Store}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Navbar />
            <Login />
            <Register />
            <ProductPage />
            {/* <Userdetails /> */}
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/collection" element={<Collections />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/create" element={<CreateNote />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
            </Routes>
            <Footer />
          </Provider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
