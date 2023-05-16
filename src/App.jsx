import { Provider } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/contactPage/contactPage'
import Footer from './components/footer/Footer'

import Store from './Redux/Store'

import './App.css'

function App() {

  return (
    <>
      <div className="layout">
        <BrowserRouter>
          <Provider store={Store}>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/contact' element={<ContactPage />}></Route>
            </Routes>
            <Footer />
          </Provider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
