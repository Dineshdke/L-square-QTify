import React from "react";
import styles from "./Faq.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq({data}){

const final = data.data;
console.log(final);
    return(
        <>
            <div className={styles.faq}>FAQs</div>
            <div className={styles.parent}>
                {final ?
                    (final.map((item)=>
                    <Accordion className={styles.container}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={styles.arrow}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={styles.question}
                        >
                        {item.question}
                        </AccordionSummary>
                        <AccordionDetails className={styles.answer}>
                        {item.answer}
                        </AccordionDetails>
                    </Accordion>
                    
                    )):''}
            </div>

        </>

        )

}