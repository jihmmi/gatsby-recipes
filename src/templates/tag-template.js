import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'

const TagTemplate = ( {data,pageContext}) => {
    const recipes = data.allContentfulRecipe.nodes
    //console.log(props)
    return (
        <Layout>
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                    <RecipesList recipes={recipes}/>
                </div>

            </main>
        </Layout> 
    )
}

export default TagTemplate

export const query = graphql`
query GetRecipesByTag($tag:String) {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        id
        prepTime
        cookTime
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }  
`
