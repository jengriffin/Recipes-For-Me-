import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import RecipeForm from './pages/RecipesForm'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          {/* <Route />
          <Route />
          <Route />
          <Route />
          <Route /> */}
          <Route path="/recipeform" element={<RecipeForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
