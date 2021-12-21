import styles from './Illustration.module.scss';

const Illustration = ({illustrationMobile, illustrationDesktop, illustrationBox}) =>{
    return(
        <>
        <div className={styles['illustration-mobile']}>
            <img alt='illustration' src={illustrationMobile}/>
        </div>
        <div className={styles['illustration-desktop']}>
          <img alt='illustration' src={illustrationDesktop}/>
          <img alt='illustration' src={illustrationBox}/>
        </div>
        </>
    )
}

export default Illustration;