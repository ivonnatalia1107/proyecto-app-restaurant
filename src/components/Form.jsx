import React, { useState } from 'react';
import './Form.css';

export default function Form() {

    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        celular: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })

    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log('Extrayendo datos desde formulario :' + ' ' + datos.nombre + ' - ' + datos.email + ' - ' + datos.celular);
        event.target.reset();


    }

    return (
        <>
        <div className='contactForm'>
            <div className='container mt-4'>
                <h1>¿Tienes alguna duda? Te contactamos! </h1>
                <form className='row' onSubmit={enviarDatos}>
                    <div className='col-md-4'>
                        <input className='form-control' type="text" placeholder='Nombre' name='nombre' onChange={handleInputChange} />
                    </div>
                    <div className='col-md-4'>
                        <input className='form-control' type="email" placeholder='e-mail' name='email' onChange={handleInputChange} />
                    </div>
                    <div className='col-md-4'>
                        <input className='form-control' type="number" placeholder='Celular' name='celular' onChange={handleInputChange} />
                    </div>
                    <div className='col-md-4'>
                        <input className='form-control' type="text" placeholder='Consulta' name='consulta' onChange={handleInputChange} />
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-primary' type='submit'> Enviar </button>
                    </div>
                </form>
            </div>
            </div>
        </>

    )
}
