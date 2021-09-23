import React from 'react'
import TagList from './TagsList'
import RecipesList from './RecipesList'
import {graphql,useStaticQuery} from 'gatsby'


const AllRecipes = () => {
    const {allContentfulRecipe:{nodes: recipes},} = useStaticQuery(query)
    //const recipes = dsRecipes.allContentfulRecipe.nodes
    //console.log(recipes)
    return (
        <section className="recipes-container">
            <TagList recipes={recipes} />
            <RecipesList recipes={recipes}/>
        </section>
    )
}

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        cookTime
        title
        prepTime
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        content {
          tags
        }
      }
    }
  }
`

export default AllRecipes
