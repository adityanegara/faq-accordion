import styles from './Illustration.module.scss';

const Illustration = ({illustrationMobile, illustrationDesktop, illustrationBox}) =>{
    return(
        <>
        <div className={styles['illustration-mobile']}>
            <img alt='illustration' src={illustrationMobile}/>
        </div>
        <div className={styles['illustration-desktop']}>
          <img alt='illustration' className={styles['main-illustration']} src={illustrationDesktop}/>
          <img alt='box' className={styles['box-illustration']} src={illustrationBox}/>
        </div>
        </>
    )
}

export default Illustration;