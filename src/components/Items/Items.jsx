import React from 'react'
import "./items.css"
function Items(props) {
   
    return (
        <div>
            
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{props.item.tache}</h6>
              
                <div >


                    <span  onClick={()=>props.modification(props.item.id)} className="mx-2 ">
                        <i class="fas fa-pen"></i>
                    </span>

                    <span onClick={()=>props.supprimer(props.item.id)}
                    className="mx-2">

                        <i className="fas fa-trash"></i>
                    </span>


                </div>
            </li>
        </div>
    )
}

export default Items

