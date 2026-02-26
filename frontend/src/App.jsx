import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homepage/HomePage.jsx";
import SurpriseMePage from "./pages/surpriseme_page/SurpriseMePage.jsx";
import SpendingPage from "./pages/spending_page/SpendingPage.jsx";
import FoodListPage from "./pages/food_list_page/FoodListPage.jsx";
import {Toaster} from "react-hot-toast";
import RegistrationPage from "./pages/registration_page/RegistrationPage.jsx";
import LoginPage from "./pages/login_page/LoginPage.jsx";
import {Home} from "lucide-react";
function App() {

  return (
      <>
          <Toaster/>
          <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/surpriseme' element={<SurpriseMePage/>}/>
              <Route path='/spending' element={<SpendingPage/>}/>
              <Route path='/food-list' element={<FoodListPage/>}/>
              <Route path='/registration' element={<RegistrationPage/>}/>
          </Routes>
      </>
  )
}

export default App
