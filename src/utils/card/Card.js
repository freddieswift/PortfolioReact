import React from 'react'
import classes from './Card.module.css'
import fast from '../../img/fast.jpg'
import Tag from './Tag'

const Card = (props) => {

    const tagsArray = props.tags
    let tags
    if (tagsArray) {
        tags = tagsArray.map(tag => {
            return <Tag name={tag.attributes.name} key={tag.id} />
        })
    }

    return (
        <div className={classes.card}>
            <img src={fast} alt='blog post cover' className={classes.cardImg} />
            <div className={classes.cardInfo}>
                {tags}
                <h3 className={classes.cardTitle}>{props.title}</h3>
                <p className={classes.cardDesc}>{props.description}</p>
            </div>
        </div>
    )
}

export default Card