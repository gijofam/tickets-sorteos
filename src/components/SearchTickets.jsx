import React from 'react'
import { useForm } from 'react-hook-form'
import './tickets.css'
const SearchTickets = () => {
    const ArrTickets = ['028562','028563','020083','018804','018803','010097','011767','014559','014560','021931','015467','034549','011432',
]
    const {register, handleSubmit, reset} = useForm()

    const searchTicket = () => {

    } 
    const submit = (data) => {
        const word = data.search

        if(ArrTickets.includes(word)){
            alert('EL TICKET EXISTE, GANASTE!!!!!')
        }else{
            alert('EL TICKET NO EXISTE')
        }
    }

  return (
    <form className='card-form' onSubmit={handleSubmit(submit)}>
        <div className='card-form__item'>
            <label htmlFor="">N° TICKET</label>
            <input type="textTicket" id='search' placeholder='Ingrese el Numero' 
            {...register('search')} />
        </div>
        <button 
         className= 'card-form__btn'
        >Buscar</button>
    </form>
  )
}

export default SearchTickets