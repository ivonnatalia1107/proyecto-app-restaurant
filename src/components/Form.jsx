import React, { useState } from 'react';
import './Form.css';
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect } from 'react'

export default function Form() {

    const clientsColletionRef = collection(db, 'datos')

    const getData = async () => {

        const data = await getDocs(clientsColletionRef)
        setDatos(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        console.log('clientes =>',datos)
    }

    useEffect(() => {

        getData()


    }, [])

    const [datos, setDatos] = useState([])

    
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")

const preventDefault = (event) => {
    event.preventDefault();
}

const crearCliente = async() => {

   await addDoc(clientsColletionRef, {nombre, email, celular});

}


    return (
        <>
            <div className='contactForm'>
                <div className='container mt-4'>
                    <h1>¿Tienes alguna duda? Te contactamos! </h1>
                    <form className='row' onSubmit={preventDefault}>

                    <div className='col-md-4'>
                            <input className='form-control'
                                type="text"
                                placeholder='Nombre'
                                name='nombre'
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)} />

                        </div>
                        <div className='col-md-4'>
                            <input className='form-control'
                                type="email"
                                placeholder='e-mail'
                                name='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className='col-md-4'>
                            <input className='form-control'
                                type="number"
                                placeholder='Celular'
                                value={celular}
                                onChange={(event) => setCelular(event.target.value)} />
                        </div>

                        <div className='col-md-4'>
                            <button className='btn btn-primary' type='submit' onClick={crearCliente} > Enviar </button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}
