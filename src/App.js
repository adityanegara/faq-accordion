import './styles/global.scss';
import Container from './components/atoms/container/Container';
import Card from './components/atoms/card/Card';
import backgroundImageMobile from './assets/images/bg-pattern-mobile.svg';
import illustrationMobile from './assets/images/illustration-woman-online-mobile.svg';
import Illustration from './components/atoms/illustration/Illustration';
import styles from './test.module.scss';

const App = () =>{
    return(
        <Container>
            <Card  backgroundImage={backgroundImageMobile}>
                <div className={styles['illustration-container']}>
                    <img src={illustrationMobile}></img>
                </div>
               
              
            </Card>
            
        </Container>
    )
}

export default App;