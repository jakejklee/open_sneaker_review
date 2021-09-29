import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'

const Wrapper = styled.div`
    margin-left:auto;
    margin-left:auto;
    display:grid;
    grid-template-columns:repeat(2,1fr);
`
const Column = styled.div`
    background: #fff;
    height:100vh;
    overflow:scroll;

    &:last-child{
        background:#000;
    }
`
const Main = styled.div`
    padding-left:50px;
`

const Project = (props) => {

    const [project, setProject] = useState({})
    const [projectReview, setProjectReview] = useState({})
    const [loaded, setLoaded] = useState(false)



    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/projects/${slug}`

        axios.get(url)
            .then(res => {
                setProject(res.data)
                setLoaded(true)
            })
            .catch(res => console.log(res))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        setProjectReview(Object.assign({}, projectReview, { [e.target.name]: e.target.value }))
        console.log('review:', projectReview)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfoken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfoken

        const project_id = project.data.id
        axios.post('/api/v1/projectreviews', { ...projectReview, project_id })
            .then(res => {
                const included = [...project.included, res.data.data]
                setProject({ ...project, included })
                setProjectReview({ title: '', description: '', score: 0 })
            })
            .catch(res => { })
    }

    const setRating = (score, e) => {
        setProjectReview({ ...projectReview, score })
    }

    let reviews

    if (loaded && project.included) {
        reviews = project.included.map((item, index) => {
            return (
                <Review
                    key={index}
                    attributes={item.attributes}
                ></Review>
            )
        })
    }
    return (
        <Wrapper>
            {
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={project.data.attributes}
                                reviews={project.included}
                            />
                            {reviews}
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            attributes={project.data.attributes}
                            review={projectReview}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}
export default Project