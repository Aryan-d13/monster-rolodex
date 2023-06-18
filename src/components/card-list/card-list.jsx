import React, { Component } from 'react'
import './card-list.css'
import Card from './card'
class CardList extends Component
{
    render(){
        const { monsters } = this.props
        
        return(
            <div className='card-list'>
                {monsters.map((monster)=>{
                    const { email,name,id } = monster;
                    return(
                  <Card email = {email} name={name} id = {id}/> 
                   
        )})}
            </div>
        )
            }
}
export default CardList;