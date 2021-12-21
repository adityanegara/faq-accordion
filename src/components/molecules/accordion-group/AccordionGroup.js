import styles from './AccordionGroup.module.scss';
import Accordion from '../../atoms/accordion/Accordion';

const AccordionGroup = ({accordionItems}) =>{
    const renderAccordionItems = (accordionItems) =>{
        return accordionItems.map((item) =>{
            return(
                <Accordion key={item.id} title={item.title} content={item.content}/>
            )
        });
    }
    return (
        <div className={styles['accordion-groups']}>
            {renderAccordionItems(accordionItems)}
        </div>
    )
}

export default AccordionGroup;