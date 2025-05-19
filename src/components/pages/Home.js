import savings from '../../img/savings.svg';
import styles from './Home.module.css';
import LinkButton from '../layout/LinkButton';

function Home(){
    return (
        <section className={styles.home_container}> 
            <h1>Bem-vindo ao Cost</h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/> {/* LinkButton é um componente que renderiza um botão que redireciona para a página de criação de projeto */}
            <img src={savings} alt='Costs'/>
        </section>
    );
}

export default Home;