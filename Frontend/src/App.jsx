import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import ForgetPassword from './pages/Auth/ForgetPassword/ForgetPassword'
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword'
import VerifyEmail from './pages/Auth/VerifyEmail/VerifyEmail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={ <Home></Home>} />
          <Route path='/login' element={<Login></Login> } />
          <Route path='/register' element={ <Register></Register>} />
          <Route path='/forget-password' element={<ForgetPassword></ForgetPassword> } />
          <Route path='/reset-password/:token' element={<ResetPassword></ResetPassword> } />
          <Route path='/verify-email/:token' element={ <VerifyEmail></VerifyEmail>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
