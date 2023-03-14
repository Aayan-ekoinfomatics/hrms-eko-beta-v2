import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  return localStorage.getItem("status" && "token") ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes