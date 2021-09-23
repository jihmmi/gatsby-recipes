import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { node } from 'prop-types'

const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes

    //console.log("nodes " , nodes)
    return (
        <Wrapper>
            {nodes.map((image,index) =>
            {
              const {name} = image 
              const pathImage = getImage(image)
              return (
              <article key={index} className="item">
                <GatsbyImage image={pathImage} className="gallery-img" alt={name}  />
                <p>{name}</p>
              </article>
              )
            })
            }
        </Wrapper>
    
    )}

    const query = graphql`
    {
      allFile(filter: {extension: {ne: "svg", in: ["jpeg", "jpg"]}}) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              width: 200
              height:200
            )
          }
        }
      }
    }
  `

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item {
  margin-right: 1rem;
}
.gallery-img {
  border-radius: 1rem;
}
`
export default Gallery
