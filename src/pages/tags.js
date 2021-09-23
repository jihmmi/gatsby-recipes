import React from 'react'
import Layout from '../components/Layout'
import TagsList from '../components/TagsList'
import {Link,graphql} from 'gatsby'
import setUpTags from '../Utiles/SetupTags'
import slugify from 'slugify'
import SEO from '../components/SEO'


const Tags = ({data}) => {
    const {allContentfulRecipe : {nodes:recipes}, } = data
    const tagList = setUpTags(recipes)
    return (
        <Layout>
          <SEO title="Tags" description="This is Tags page"/>
                <main className="page">
                    <section className="tags-page">                        
                    {tagList.map((tag,index) =>{
                        const [text,value] = tag
                        const slug = slugify(text,{lower:true})
                        return <Link className="tag" key={index} to={`/tags/${slug}`}>
                            <h5>{text}</h5>
                            <p>{value} Recipe</p> 
                            </Link>
                    })

                    }
                        
                    </section>
                    
                </main>
        </Layout>
    )
}

export default Tags

export const query = graphql`
{
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
