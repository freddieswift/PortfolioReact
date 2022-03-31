import React from 'react'
import Container from '../container/Container'
import classes from './Section.module.css'

const Section = (props) => {
    return (
        <section className={`section ${props.className}`} id={props.id}>
            <Container className={props.container}>
                {props.sectionHeading && <h2 className={classes.sectionHeading}>{props.sectionHeading}</h2>}
                {props.children}
            </Container>
        </section>
    )
}

export default Section