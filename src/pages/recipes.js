import React from 'react'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'

const Recipes = () => {
    return (
        <Layout>
            <h2>Hello from recepes page</h2>
            <main className="page">
            
            <AllRecipes/>
            </main>
        </Layout>
    )
}

export default Recipes
