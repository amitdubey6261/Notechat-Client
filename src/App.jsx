import { Provider, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./components/homePage/HomePage.jsx";
import Collections from "./components/collections/Collections.jsx";
import AboutPage from "./components/aboutPage/AboutPage.jsx";
import ContactPage from "./components/contactPage/ContactPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/login/Login.jsx";
import CreateNote from "./components/createProduct/CreateNote.jsx";

import Store from "./Redux/Store";

import "./App.css";
import Register from "./components/login/Register.jsx";
import Admin from "./components/adminPage/Admin.jsx";
import { ToastContainer } from "react-toastify";
import { loadUser } from "./Redux/global/LoadUser.js";
import { useEffect } from "react";
import ForgotPassword from "./components/login/ForgotPassword.jsx";
import InfoHeader from "./components/InfoHeader/InfoHeader.jsx";
import PdfViewer from "./components/pdfViewer/PdfViewer.jsx";
import ProductPage from "./components/productPage/ProductPage.jsx";
import Mycart from "./components/mycart/Mycart.jsx";
import MyNotes from "./components/myNotes/MyNotes.jsx";
import User from "./components/userPage/User.jsx";
import Reset from "./components/login/Reset.jsx";

function App() {
  
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

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
              theme="light"
            />
            <Navbar />
            <Login />
            <Register />
            <ForgotPassword/>
            <InfoHeader/>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/collection" element={<Collections />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/create" element={<CreateNote />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/pdf" element={<PdfViewer/>}></Route>
              <Route path='/product' element={<ProductPage/>}></Route>
              <Route path='/cart' element={<Mycart/>}></Route>
              <Route path="/myNotes" element={<MyNotes/>}></Route>
              <Route path="/user" element={<User/>}></Route>
              <Route path="/reset/:id" element={<Reset/>}></Route>
            </Routes>
            <Footer />
          </Provider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
