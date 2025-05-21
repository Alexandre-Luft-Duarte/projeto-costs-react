import ProjectForm from '../project/ProjectForm'; /* Importa o componente ProjectForm */
import styles from './NewProject.module.css'; 
import { useNavigate } from 'react-router-dom';

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){ // Recebe o projeto do formulário
        // initializr cost and service
        project.cost =  0 // Inicializa o custo do projeto como 0
        project.service = [] // Inicializa os serviços do projeto como um array vazio

        fetch('http://localhost:5000/projects', { // Faz uma requisição para a API local
            method: 'POST', // Método POST para criar um novo projeto
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify(project), // Converte o projeto para JSON
        })
            .then((resp) => resp.json()) // Quando a resposta chega, ela é convertida de JSON para um objeto JavaScript.
            .then((data) => {
                console.log(data) // Exibe os dados do projeto criado no console
                //redirect
                navigate('/projects', { state: { message: "Projeto criado com sucesso!"}});
                
             })
             .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie um projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/> {/* Passa o texto do botão para o componente ProjectForm */}
            {/* O componente ProjectForm é responsável por renderizar o formulário de criação de projeto */}
            {/*Passa a função createPost como handleSubmit para o formulário */}
            
        </div>
    );
}

export default NewProject;