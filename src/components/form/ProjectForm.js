import styles from './ProjectForm.module.css';
import Form from './components/Form';
import Select from './components/Select';
import SubmitButton from './components/SubmitButton';

function ProjectForm ({btnText}){
    return(
        <form className={styles.form}>
            <Form 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o Projeto"
            />    
            
            <Form 
                type="number" 
                text="Valor do Orçamento" 
                name="budget" 
                placeholder="Insira o Orçamento"
            />

            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;