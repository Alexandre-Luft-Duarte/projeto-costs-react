import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png";
import styles from "./NavBar.module.css";

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" className={styles.brand}>
                    <img src={logo} alt="Costs" className={styles.logo} />
                    <span className={styles.brandText}>Costs</span>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default NavBar;