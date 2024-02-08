import React from 'react';
import {AccordionItem} from './AccordionItem';
import {data} from '../services/data';



export const Accordion=()=> {
  return (
    <div className='accordion'>
       {
       data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          pregunta={item.pregunta}
          respuesta={item.respuesta}
          
        />
      ))}
    </div>
  );
};
