import { Provider } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.jsx'
import HomePage from './components/homePage/HomePage.jsx'
import Collections from './components/collections/Collections.jsx'
import AboutPage from './components/aboutPage/AboutPage.jsx'
import ContactPage from './components/contactPage/ContactPage.jsx'
import Footer from './components/footer/Footer.jsx'
import Login from './components/login/Login.jsx'
import ProductPage from './components/productPage/ProductPage.jsx'
import CreateNote from './components/createProduct/CreateNote.jsx'

import Store from './Redux/Store'

import './App.css'
import Register from './components/login/Register.jsx'
import Admin from './components/adminPage/Admin.jsx'

function App() {

  return (
    <>
      <div className="layout">
        
        <BrowserRouter>
          <Provider store={Store}>
            <Navbar />
            <Login/>
            <Register/>
            <ProductPage/>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/collection' element={<Collections />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/contact' element={<ContactPage />}></Route>
              <Route path='/create' element={<CreateNote />}></Route>
              <Route path='/admin' element={<Admin/>}></Route>
            </Routes>
            <Footer />
          </Provider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
