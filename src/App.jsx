import React, { Component } from "react"
import "./App.css"
import Input from "./components/Input/Input"
import ToDolist from "./components/ToDoList/ToDoList"
// import Items from "./components/Items/Items"


class App extends Component {

    state = {


         taches:
       [
            ],
            // { id: 2, tache: "Manger" },
            // { id: 3, tache: "Faire du sport" }],

        task: "",
        editTask:false

    }








    changeInput = (event) => {

        this.setState({
            task: event.target.value
        })


    }







    Enregistrer = (event) => {

        event.preventDefault()
         let addNewTask =[]



        if (this.state.taches.length == 0) {
            const newTask = { id: 1, tache: this.state.task }
                  addNewTask = [...this.state.taches, newTask]

        } else {
            const lastIndex = this.state.taches.length - 1;
            const lastTask = this.state.taches[lastIndex]
            const newTask = { id: lastTask.id + 1, tache: this.state.task }
                  addNewTask = [...this.state.taches, newTask]
        }
   
        this.setState({
            task:"",
            taches: addNewTask,
            editTask:false
            
           
        })
    }


   

    



    Supprimer = (id) => {

        const tabSup = this.state.taches.filter(function (item) {
            return item.id != id
        })

        this.setState({
            taches: tabSup
        })

    }

    




    Modification = (id,event) =>{
        const ModifS = this.state.taches.filter(function (item) {
            return item.id != id
        });

        const Modif = this.state.taches.filter(function (item) {
            return item.id===id
        })

        this.setState({
            taches:ModifS,
            task:Modif[0].tache,
            editTask:true
        })

    
     }

     clearList =()=>{
         this.setState({
              taches:[]
         })
     }


     



    render() {
       
        return (
            <div className="container mx-auto w-50 mx-auto mt-5">
                <div className="principal">
                    <h1 className="text-center ">Ma Liste "To-Do"</h1>
                    <Input changeInput={this.changeInput} Enregistrer={this.Enregistrer}  ELmodif ={this.state.task} editTask={this.state.editTask}/>
                    <ToDolist taches={this.state.taches}  supprimer={this.Supprimer} edit={this.Modification} clearList={this.clearList}/>
                   
                </div>
            </div>
        );
    }
}

export default App;

