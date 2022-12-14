import React, { Component } from 'react'
import { useState} from 'react';
import './Todo.css';
import {generateTodos} from '../utils/generate'




export default function App() {
  const[todos]=useState(
    generateTodos()
  )
   
    const [value, setValue] = useState('')
    const filteredBlocks = todos.filter(todos=>{
      return todos.name.toLowerCase().includes(value.toLowerCase())
    })

    const allBlock = todos.filter(todos=>{return todos.name.toLowerCase().includes(value.toLowerCase())}).length;   

      const sortBlocks = () =>{     
        const priceToSort = [...todos];  
        priceToSort.sort((a, b) => Number(a.price) - Number(b.price));
      }   
 
    return (
      <div className="app">
        <div className="status">
        <div className="counter">All:{allBlock}</div>
        <div>
          <input type="text" placeholder='Найти продукт' onChange={(event)=>setValue(event.target.value)}/>
        </div>
        <div>
          <button onClick={sortBlocks}>Сортируем по цене</button>
        </div>
        </div>
        <div className="main">
        {filteredBlocks.map( el => (
          <div className='block'>
          <img src={el.imageUrl} width="100%" ></img>
          <h2>{el.name}</h2>
          <p>Выполненны из {el.description1} кожи и {el.description2}</p>
          <h4>Цвет: {el.color}</h4>
          <h4>Цена: {el.price} byn</h4>
          <h4>Рейтинг: {el.rating}</h4>
        </div>
        ))}
        </div>
      </div>
      
    );
    
  }



