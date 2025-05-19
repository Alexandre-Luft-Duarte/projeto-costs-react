import ProjectForm from '../project/ProjectForm'; /* Importa o componente ProjectForm */
import styles from './NewProject.module.css'; 

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie um projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/> {/* Passa o texto do botão para o componente ProjectForm */}
            {/* O componente ProjectForm é responsável por renderizar o formulário de criação de projeto */}
        </div>
    );
}

export default NewProject;