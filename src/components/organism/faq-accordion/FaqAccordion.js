
import Container from "../../atoms/container/Container"
import Card from "../../atoms/card/Card"
import Illustration from "../../atoms/illustration/Illustration"
import backgroundImageMobile from "../../../assets/images/bg-pattern-mobile.svg";
import illustrationMobile from "../../../assets/images/illustration-woman-online-mobile.svg";
import styles from './FaqAccordion.module.scss';
import AccordionGroup from "../../molecules/accordion-group/AccordionGroup";

const FaqAccordion = () =>{

    return(
        <Container>
        <Card  backgroundImage={backgroundImageMobile}>
            <Illustration illustrationMobile={illustrationMobile}/>
            <p className={styles['title']}>FAQ</p>
            <AccordionGroup/>
          
        </Card>
    </Container>
    )
}

export default FaqAccordion;