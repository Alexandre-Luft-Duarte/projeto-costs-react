import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom';

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
            setCategories(data) /* O resultado é armazenado no estado categories usando o setCategories. */
        })
        .catch((err) => console.log(err)); /* Se houver um erro, ele é capturado e exibido no console. */
    }, [])

    const submit = (e) => { 
        e.preventDefault() // Previne o comportamento padrão do formulário de recarregar a página
        handleSubmit(project) // Chama a função handleSubmit passada como prop, passando o projeto como argumento
    }

    function handleChange(e) { // é o evento que ocorre quando o usuário altera o valor de um campo do formulário
        setProject({ ...project, [e.target.name]: e.target.value }) // Atualiza o estado do projeto com os novos valores dos campos
    }

     function handleCategory(e) { 
        setProject({ 
            ...project, 
            categorie: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text, // Atualiza o estado do projeto com a categoria selecionada
            },
          }) 
        }       

    return(
        <form onSubmit={submit} className={styles.form}> 
            <Input 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o Projeto"

                handleOnChange={handleChange}
                value={project.name ? project.name: ''} 
            />    
            <Input 
                type="number" 
                text="Valor do Orçamento" 
                name="budget" 
                placeholder="Insira o Orçamento"
                handleOnChange={handleChange}
                value={project.budget ? project.budget: ''}

            />
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.categorie ? project.categorie.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;