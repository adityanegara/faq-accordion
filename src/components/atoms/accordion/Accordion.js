import { useState } from 'react';
import styles from './Accordion.module.scss';
import arrowIcon from "../../../assets/icon/icon-arrow-down.svg";

const Accordion = ({title, content}) =>{
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const handleButtonClicked = () =>{
        setIsAccordionOpen(!isAccordionOpen);
    }

    const rotateArrowIcon = (accordionState) =>{
        return accordionState ? styles['rotate-animation'] : styles['no-rotate-animation'];
    }

    const renderAccordionContent = (accordionState) =>{
        return accordionState ? styles['height-animation'] : styles['no-height-animation'];
    }

    const renderBorderBottom = (accordionState) =>{
        return accordionState ?  "" : styles['border-bottom'];
    }

    const renderFocusedText = (accordionState) =>{
        return accordionState ?  styles['focused-text'] : "";
    }
    return(
            <div className={styles['accordion']}>
                <button onClick={handleButtonClicked} className={`${styles['accordion-button']} ${renderBorderBottom(isAccordionOpen)}`}>
                    <p className={renderFocusedText(isAccordionOpen)}>
                      {title}
                    </p>
                    <i className={rotateArrowIcon(isAccordionOpen)}>
                        <img alt="arrow" src={arrowIcon}/>
                    </i>
                </button>
                <p className={`${styles['accordion-content']} ${renderAccordionContent(isAccordionOpen)}`}>
                    {content}
                </p>
            </div>
    )
}

export default Accordion;