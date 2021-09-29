import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
border:1px solid #efefef;
background:#fff;
text-align:center;
`
const ProjectLogo = styled.div`
width:50px;
text-align:center;
margin-left:auto;
margin-right:auto;
padding-top:10px;

img{
    height:50px;
    width:50px;
    border-radius:100%;
    border: 1px solid #efefef
}
`
const ProjectName = styled.div`
    padding:20px 0 10px 0;
    
`
const LinkWrapper = styled.div`
margin:30px 0 20px 0;
height:50px;

a{
    color:#fff;
    background:#000;
    border-radius:4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width:100%;
    text-decoration: none;
}
`

const Project = (props) => {
    console.log(props)
    return (
        <Card>
            <ProjectLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </ProjectLogo>
            <ProjectName>{props.attributes.name}</ProjectName>
            <Rating score={props.attributes.ave_score} />
            <LinkWrapper className="project-link">
                <Link to={`/projects/${props.attributes.slug}`}>
                    View Project
                </Link>
            </LinkWrapper>
        </Card>
    )
}

export default Project