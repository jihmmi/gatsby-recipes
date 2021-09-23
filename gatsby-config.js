/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gnpmatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Simply Recipes',
    description: "Nice and clean recipes site",
    author: "@jaimeH",
    person: {name:"Jaime",age:1000},
    simpleData :["item 1","item 2"],
    complexData:[
      {name:"Juan",age:32},
      {name:"Susan",age:21},
    ],

  },

  plugins: [`gatsby-plugin-styled-components`,
            `gatsby-plugin-image`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`, // Needed for dynamic images
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
              },
            },
            {
              resolve: `gatsby-source-contentful`,
              options: {
                spaceId: `ug1j8io4sdyx`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_API_KEY,
              },
            },
            {
              resolve: `gatsby-plugin-webfonts`,
              options: {
                fonts: {
                  google: [
                    {
                      family: "Montserrat",
                      variants: ["400"],
                      //subsets: ['latin']
                      //text: 'Hello'
                      //fontDisplay: 'swap',
                      //strategy: 'selfHosted' // 'base64' || 'cdn'
                    },
                    {
                      family: "Inconsolata",
                      variants: ["400", "500", "600"],
                      //subsets: ['latin']
                      //text: 'Hello'
                      //fontDisplay: 'swap',
                      //strategy: 'selfHosted' // 'base64' || 'cdn'
                    },                    
                  ],
                },}},
                `gatsby-plugin-react-helmet`, 
                                               
          ],
          
}
