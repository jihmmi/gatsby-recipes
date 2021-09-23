import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery,graphql} from 'gatsby'

const SEO = ({title,description}) => {
    const {site} = useStaticQuery(query)
    const metaDesc = description || site.siteMetadata.description
    return (
        <Helmet htmlAttributes={{lang:"en"}} 
        title={`${title} | ${site.siteMetadata.title}`} 
        meta={[{name:`description`,content:metaDesc}]}></Helmet>
    )
}

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`