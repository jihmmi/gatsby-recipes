import React from 'react'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

const Recipes = () => {
    return (
        <Layout>
            <SEO title="Recipes" description="This is recipes page"/>

            <main className="page">
            <h2>Recipes</h2>
            <AllRecipes/>
            </main>
        </Layout>
    )
}

export default Recipes
