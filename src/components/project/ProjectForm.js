import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import {useEffect, useState} from 'react'

function ProjectForm ({ handleSubmit, btnText, projectData }){ 
    const[categories, setCategories] = useState([]) /* Inicializa o estado categories como um array vazio */
    const[project, setProject] = useState(projectData || {}) // /* Inicializa o estado project como um objeto vazio ou com os dados do projeto recebidos como props */
    
    useEffect(() => {
    fetch('http://localhost:5000/categories', { /*faz uma requisição para a API local*/
        method: 'GET', /* método GET para buscar os dados*/
        headers: { /* define o tipo de conteúdo da requisição*/
            'Content-Type': 'application/json'
        },
    })
        .then((resp) => resp.json()) /* Quando a resposta chega, ela é convertida de JSON para um objeto JavaScript.*/
        .then((data) => {
            setCategories(data)
        }) /* O resultado é armazenado no estado categories usando o setCategories. */
        .catch((err) => console.log(err)); /* Se houver um erro, ele é capturado e exibido no console. */
    }, [])

    const submit = (e) => { 
        e.preventDEfault() // Previne o comportamento padrão do formulário de recarregar a página
        handleSubmit(project) // Chama a função handleSubmit passada como prop, passando o projeto como argumento
    }

    return(
        <form onSubmit={submit} className={styles.form}> 
            <Input 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o Projeto"
            />    
            <Input 
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