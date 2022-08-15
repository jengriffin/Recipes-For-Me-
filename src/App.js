import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import RecipeForm from './pages/RecipesForm'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipeslist'

const App = () => {
  return (
    <div>
      {/* <header>
        <Nav />
      </header> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feed" element={<Recipes />} />
          <Route />

          <Route path="/register" element={<Register />} />
          <Route path="/recipeform" element={<RecipeForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
