import React from 'react'
import Layout from '../components/Layout'
import { graphql,Link } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import {BsClockHistory,BsClock,BsPeople} from 'react-icons/bs'
import slugify from 'slugify'

const RecipeTemplate = (props) => {
    const {title,cookTime,prepTime,servings,image,content:{ingredients,instructions,tools,tags},description:{description} } = props.data.contentfulRecipe
    const srcImage = getImage(image)
    return (
      <Layout>
        <main className="page">          
          <div className="recipe-page">
            <section className="recipe-hero">
              <GatsbyImage image={srcImage} alt={title} className="about-img"/>
              <article className="recipe-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="recipe-icons">
                  <article>
                      <BsClock/>
                      <h5>Prep Time</h5>
                      <p>{prepTime} min.</p>
                    </article>
                    <article>
                      <BsClockHistory/>
                      <h5>Cook Time</h5>
                      <p>{cookTime} min.</p>
                    </article>
                    <article>
                      <BsPeople/>
                      <h5>Serving</h5>
                      <p>{servings} </p>
                    </article>                                        
                </div>
                <p className="recipe-tags">
                  Tags: {tags.map((tag,index)=>{
                    const slug = slugify(tag,{lower:true})
                    return <Link to={`/tags/${slug}`} key={index}>{tag}</Link>
                  })}
                </p>
                </article>
              <article className="">
                
              </article>

            </section>
            <section className="recipe-content"> 
                  <article >
                      <h4>Instruction</h4>
                        {instructions.map((instruction,index) => {
                          return (
                          <div key={index} className="single-instruction">
                            <header>
                              Step {index+1}
                              <div></div>
                            </header>
                              <p>{instruction}</p>
                          </div>)
                        })} 
                  </article>
                  <article className="second-column">
                    <div >
                      <h4>ingredients</h4> 
                      {ingredients.map((ingredient,index)=>{
                        return <p  key={index} className="single=ingredient">{ingredient}</p>
                      })}
                    </div>
                    <div >
                      <h4>tools</h4> 
                      {tools.map((tool,index)=>{
                        return <p key={index} className="single=tool">{tool}</p>
                      })}
                    </div>
                  </article>

            </section>
          </div>                        
        </main>
      </Layout>
    )
}

export default RecipeTemplate

export const query = graphql`
 query getSingleRecipe($title:String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      prepTime
      servings
      content {
        ingredients
        instructions
        tools
        tags
      }
      description{
        description
      }
    }
  }
`
