function ProjectForm (){
    return(
        <form>
            <div>
                <input type="text" placeholder="Nome do Projeto"/>
            </div>    
            <div>
                <input type="text" placeholder="Valor do Orçamento"/>
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>
                        Selecione a categoria
                    </option>
                </select>    
            </div>
            <div>
                <input type="submit" value="Criar projeto"/>    
            </div> 
        </form>
    );
}

export default ProjectForm;