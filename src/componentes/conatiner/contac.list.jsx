import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../pure/contacto';
import { Contacto } from '../../model/contacto.class';


const ContacList = () => {
   
    const defaulContacto = new Contacto("carlos","garizado","cgarizado1999@gmail.com",true)


    return (
        <div>

            <Contact
             cont= {defaulContacto}
            />
            
        </div>
    );
};


ContacList.propTypes = {

};


export default ContacList;
