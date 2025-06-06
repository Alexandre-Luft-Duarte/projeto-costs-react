import Message from "../layout/Message";
import { useLocation } from 'react-router-dom';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import { useState, useEffect } from 'react';
import ProjectCard from "../project/ProjectCard";
import Loading from '../layout/Loading';

function Projects(){
    const[projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState()

    const location = useLocation(false)
    let message = ''
    if(location.state){
        message = location.state.message
    }
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) 
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data) 
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        }, 500)  
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1 className={styles.h1}>Meus Projetos</h1>

                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="sucess" msg={message}  />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                    <ProjectCard 
                    name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category?.name}
                    key={project.id}
                    handleRemove={removeProject}
                    />       
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p className={styles.p}>Não há projetos criados!</p>
                )}
            </Container>    
        </div>
    )
}

export default Projects;