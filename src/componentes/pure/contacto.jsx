import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../model/contacto.class';



const Contact = ({cont}) => {
    return (
        <div>
            <h3> nombre: {cont.nombre}</h3>
            <h3> apellido: {cont.apellido}</h3>
            <h3>email :{cont.email}</h3>
            <h4>conexion: {cont.conectado ? "online":"offline"}</h4>

            
        </div>
    );
};


Contact.propTypes = {
    cont: PropTypes.instanceOf(Contacto)

};


export default Contact;
