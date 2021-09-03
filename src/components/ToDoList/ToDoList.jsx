import React from 'react'
import Items from '../Items/Items';

function ToDoList(props) {

 
   
    const list = props.taches.map((item, index) => {
        return <Items item={item} key={index} supprimer={props.supprimer} modification={props.edit}/>;
    })

    


    return (
        <div>
            <h1 className="text-center">Liste des choses à faire ...</h1>
            {list}
            <button className="btn btn-danger form-control" onClick={props.clearList}>Effacer la liste</button>
        </div>
    )
}

export default ToDoList



