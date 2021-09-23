import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import {Link , graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

const Contact = ({data})=> {
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                <article className="contact-info">
                    <h3>
                        Want To Get In Touch?
                    </h3>
                    
                        <p>
                        Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
                        </p>
                        <p>
                        Cardigan prism bicycle rights put a bird on it deep v.
                        </p>
                        <p>
                        Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
                        </p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">Your Name </label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email </label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Message </label>
                                <textarea name="message" id="message"  />
                            </div>
                            <button type="submit" className="btn block" >Submit</button>
                        </form>
                    </article>

                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awsome souce!</h5>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout>
    )
}
export default Contact

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        cookTime
        title
        prepTime
        id
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        content {
          tags
        }
      }
    }
  }
`
