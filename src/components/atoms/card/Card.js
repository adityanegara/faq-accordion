import styles from './Card.module.scss';

const Card = ({children, backgroundImageMobile, backgroundImageDesktop}) =>{
    return(
        <>
        <div className={styles['card-mobile']} style={{
            backgroundImage : `url(${backgroundImageMobile})`
        }}>
            {children}
        </div>
        <div className={styles['card-desktop']} style={{
            backgroundImage : `url(${backgroundImageDesktop})`
        }}>
            {children}
        </div>
        </>

        
    )
}

export default Card;