import styles from './AccordionGroup.module.scss';
import Accordion from '../../atoms/accordion/Accordion';

const AccordionGroup = () =>{
    return (
        <div className={styles['accordion-groups']}>
            <Accordion title='How many team member can i invite?' content='You can invite up to 5 team members. If you want to upgrade to 10 team members you must subscribe to premium plans.'/>
            <Accordion title='What is the maximum file upload?' content='No more than 2GB. All files in your account must fit your allocated storage space.' />
        </div>
    )
}

export default AccordionGroup;