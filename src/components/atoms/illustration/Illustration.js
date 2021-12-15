import styles from './Illustration.module.scss';
import Container from '../container/Container';

const Illustration = ({illustrationMobile}) =>{
    return(
        <div className={styles['illustration']}>
            <img alt='illustration' src={illustrationMobile}/>
        </div>
    
    )
}

export default Illustration;