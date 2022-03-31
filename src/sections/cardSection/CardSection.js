import React, { useState, useEffect, useCallback } from 'react'
import Section from '../../utils/section/Section'
import Card from '../../utils/card/Card'
import classes from './CardSection.module.css'
import Grid from '../../utils/grid/Grid'

const CardSection = (props) => {

    const [projects, setProjects] = useState([])

    const getProjectsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://swiftportfoliostrapi.herokuapp.com/api/articles')
            const data = await response.json()
            const transformedData = data.data.map((project) => {
                return {
                    title: project.attributes.Title,
                    description: project.attributes.Description,
                    slug: project.attributes.Slug
                }
            })
            console.log(transformedData)
            setProjects(transformedData)
        }
        catch (error) {
            console.log("error", error)
        }
    }, [])

    useEffect(() => {
        getProjectsHandler()
    }, [getProjectsHandler])

    const projectCards = projects.map(project => {
        return <Card title={project.title} description={project.description} slug={project.slug} />
    })

    return (
        <Section className={classes.cardSection} sectionHeading={props.sectionHeading}>
            <Grid gridLayout='grid3Col'>
                {projectCards}
            </Grid>
        </Section>
    )
}

export default CardSection