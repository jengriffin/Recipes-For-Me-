import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import RecipeForm from './pages/RecipesForm'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import Recipes from './pages/Recipeslist'
import Landing from './pages/Landing'
import './sideNav.css'
import RecipesCard from './components/RecipesCard'
import SignIn from './pages/Signin'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="main_app">
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feed" element={<Recipes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipeform" element={<RecipeForm />} />

          <Route path="/" element={<Landing />} />

          <Route path="/recipes/:id" element={<RecipesCard />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
