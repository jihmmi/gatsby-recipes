import React from 'react'
import Layout from '../components/Layout'
import TagsList from '../components/TagsList'
import {Link,graphql} from 'gatsby'
import setUpTags from '../Utiles/SetupTags'


const Tags = ({data}) => {
    const {allContentfulRecipe : {nodes:recipes}, } = data
    const tagList = setUpTags(recipes)
    return (
        <Layout>
                <main className="page">
                    <section className="tags-page">                        
                    {tagList.map((tag,index) =>{
                        const [text,value] = tag
                        return <Link className="tag" key={index} to={`/tags/${text}`}>
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
