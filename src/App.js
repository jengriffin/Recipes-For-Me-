import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import RecipeForm from './pages/RecipesForm'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import Recipes from './pages/Recipeslist'
import './sideNav.css'

const App = () => {
  return (
    <div className="main_app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feed" element={<Recipes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipeform" element={<RecipeForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
