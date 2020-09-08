import React from 'react';
import "./ListItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
          <p>
            <img src={item.image} id="image_contato"/>

            <input type="text" id={item.key} value={item.nome} onChange={(e)=>{
            props.setUpdate(e.target.value,item.key)}}/>

            <input type="text" id={item.key} value={item.cpf} readOnly/> 
            <input type="text" id={item.key} value={item.email} readOnly/>  
            
            <span>
       
                <FontAwesomeIcon icon="trash" className="faicons" onClick={() => {
                    props.deleteItem(item.key)
                }} />
            </span>
             
          </p>
          
         </div>})
         return <div>
             <FlipMove duration={300} easing="ease-in-out">
             {listItems}
             </FlipMove>
         
         </div>;
}

export default ListItems;