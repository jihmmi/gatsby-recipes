import React from 'react'
import setUpTags from '../Utiles/SetupTags'
import {Link} from 'gatsby'
import slugify from 'slugify'


const TagsList = ({recipes = []}) => {
    console.log(recipes)
    const tagList = setUpTags(recipes)
    console.log("TagList:",tagList)
    return (
        <div className="tag-container">
            <h4>Recipes</h4>
            <div className="tags-list">
            {tagList.map((tag,index) =>{                
                const [text,value] = tag
                const slug = slugify(text,{lower:true})
                return <Link to={`/tags/${slug}`} key={index}>{text} ({value})</Link>
            })}
            </div>

        </div>
    )
}

export default TagsList
