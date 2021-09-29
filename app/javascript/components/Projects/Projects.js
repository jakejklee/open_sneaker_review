import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Project from './Project'

const Home = styled.div`
    text-align:center;
    max-width:1200px;
    margin-left:auto;
    margin-right:auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1{
        font-size:42px;
    }
    
`
const Subheader = styled.div`
    font-weight:300;
    font-size:26px;
    
`
const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    grid-gap: 20px;
    width:100%;
    padding:20px;
    
`

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // Get all of our project from api
        // Update projects in our state

        axios.get('/api/v1/projects.json')
            .then(res => {
                setProjects(res.data.data)
            })
            .catch(res => console.log(res))
    }, [projects.length])

    const grid = projects.map(item => {
        return (
            <Project
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )

    })
    return (
        <Home>
            <Header>
                <h1>OpenProjects</h1>
                <Subheader>Honest, unbiased sneakers reviews.</Subheader>
            </Header>
            <Grid>

                {grid}
            </Grid>

        </Home>
    )
}
export default Projects