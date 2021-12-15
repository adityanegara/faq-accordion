import { useEffect } from 'react';
import styles from './Card.module.scss';

const Card = ({children, backgroundImage}) =>{
    return(
        <div className={styles['card']} style={{
            backgroundImage : `url(${backgroundImage})`
        }}>
            {children}
        </div>
    )
}

export default Card;