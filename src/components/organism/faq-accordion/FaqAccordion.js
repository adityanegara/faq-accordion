
import Container from "../../atoms/container/Container"
import Card from "../../atoms/card/Card"
import Illustration from "../../atoms/illustration/Illustration"
import backgroundImageMobile from "../../../assets/images/bg-pattern-mobile.svg";
import illustrationMobile from "../../../assets/images/illustration-woman-online-mobile.svg";
import illustrationDesktop from "../../../assets/images/illustration-woman-online-desktop.svg"
import illustrationBox from "../../../assets/images/illustration-box-desktop.svg";
import styles from './FaqAccordion.module.scss';
import AccordionGroup from "../../molecules/accordion-group/AccordionGroup";
import accordionItems from "../../../constant/accordionItems";

const FaqAccordion = () =>{
    return(
        <Container>
            <Card  backgroundImage={backgroundImageMobile}>
                <div className={styles['faq-accordion']}>
                    <div className={styles['illustration-container']}>
                        <Illustration illustrationMobile={illustrationMobile} illustrationDesktop={illustrationDesktop} illustrationBox={illustrationBox}/>
                    </div>
                    <div className={styles['title-container']}>
                        <p className={styles['title']}>FAQ</p>
                    </div>
                    <div className={styles['accordion-container']}>
                        <AccordionGroup accordionItems = {accordionItems}/>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default FaqAccordion;