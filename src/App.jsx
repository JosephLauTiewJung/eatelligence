import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homepage/HomePage.jsx";
import SurpriseMePage from "./pages/surpriseme_page/SurpriseMePage.jsx";
import SpendingPage from "./pages/spending_page/SpendingPage.jsx";
import FoodListPage from "./pages/food_list_page/FoodListPage.jsx";
import {Toaster} from "react-hot-toast";
function App() {

  return (
      <>
          <Toaster/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/surpriseme' element={<SurpriseMePage/>}/>
              <Route path='/spending' element={<SpendingPage/>}/>
              <Route path='/food-list' element={<FoodListPage/>}/>
          </Routes>
      </>
  )
}

export default App
