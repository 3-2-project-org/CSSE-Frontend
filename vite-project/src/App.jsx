import './App.css'
import Registration from './components/Auth/Registeration'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Sidebar from './components/SideBar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>


<Router>
      <Routes>
      
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/register" element={<Registration/>} />
    
      </Routes>
    </Router>






    

    </>
  )
}

export default App
