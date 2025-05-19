import styles from './ProjectForm.module.css';
import Form from '../form/components/Form';
import Select from '../form/components/Select';
import SubmitButton from '../form/components/SubmitButton';
import {useState, useEffect} from 'react'

function ProjectForm ({btnText}){
    
    const[categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', { /*faz uma requisição para a API local*/
            method: 'GET', /* método GET para buscar os dados*/
            headers: { /* define o tipo de conteúdo da requisição*/
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json()) /* Quando a resposta chega, ela é convertida de JSON para um objeto JavaScript.*/
            .then((data) => setCategories(data)) /* O resultado é armazenado no estado categories usando o setCategories. */
            .catch((err) => console.log(err)); /* Se houver um erro, ele é capturado e exibido no console. */
    }, []); // <- esse array vazio faz rodar só uma vez

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
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;