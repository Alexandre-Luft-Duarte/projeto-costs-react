import styles from './Loading.module.css';
import loader from '../../img/loading.svg';

function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loader} alt='Loading'/>
        </div>
    );
}

export default Loading;