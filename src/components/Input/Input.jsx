import React from 'react'






// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//    console.log(event)
// })

function Input(props) {
    
 


    return (
        <div className="card card-body mt-5">
<form className="formulaire" onSubmit={props.Enregistrer}>
            <div className="input-group mb-3">
            {props.editTask?<span className="input-group-text bg-success text-light trash" id="basic-addon1"><i class="fas fa-book"></i></span>:<span className="input-group-text bg-primary text-light trash" id="basic-addon1"><i class="fas fa-book"></i></span>
}

           
            <input onChange={props.changeInput} type="text" class="form-control" placeholder="Quelle-est votre prochaine tâche?" value={props.ELmodif}  />
            </div>
{props.editTask? <button className="btn btn-success text-light form-control" id="btn" >Modifier une tâche</button>:<button className="btn btn-primary text-light form-control" id="btn" >Ajouter une tâche</button>}
           
            

            </form>
        </div>
    )
    
}

export default Input
