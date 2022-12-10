import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './Components/pages/LoginPage'
import UserDasboard from './Components/pages/UserDasboard'
import ProtectedRoutes from './helpers/routing/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>

        <Route path='*' element={<Navigate to='/login' replace={true} />} />  
        <Route path='/login' element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<UserDasboard/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
