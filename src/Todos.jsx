import React, {useState } from "react";
import EachTodo from "./EachTodo";

function Todos(){

    
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "wake up at 6am",
            completed: true,
        },
        {
            id: 2,
            title: "go to gym at 7 am",
            completed: false,
        },
    ]);

    const [inputTitle, setinputTitle] = useState("")

    const[showModal, setShowModal] = useState(false)

    const [selectedTodo, setselectedTodo] = useState({})

    function handleTitle(event){
        setinputTitle(event.target.value);
    }
    function handleAdd(){
        // let data = [...todos];

        // data.push({
        //     title: inputTitle,
        //     completed:false
        // })

        setTodos([...todos, {
         title: inputTitle,
           completed:false
        }])

        setinputTitle("");
    }

    function handleDelete(pos){
        let data = [...todos];

        let result = data.filter((ele,index) => pos !== index)
        // console.log(result, 'result')
        setTodos(result)
    }

    function handleCheckbox(pos){
        let data = [...todos];

        let result = data.filter((ele,index) => {
            if(pos == index){
                ele.completed = !ele.completed
            }
            return ele;
        });
        // console.log(result, 'result')
        setTodos(result)
    }

    // (pos){
    //     let updatedTitle = prompt("enter the title")

    //     let data = [...todos];

    //     let result = data.filter((ele,index) => {
    //         if(pos == index){
    //             // ele.completed = !ele.completed
    //             ele.title = updatedTitle
    //         }
    //         return ele;
    //     });
    //     // console.log(result, 'result')
    //     setTodos(result)
    // }

    function handleEdit(ele,index){
        setselectedTodo(ele);
        setShowModal(true)
    }

    function handleClose(){
        setShowModal(false)
    }

    function handleUpdatedTitle(event){
        let updatedTitle = event.target.value;

        let data = {...selectedTodo}

        data.title = updatedTitle;

        setselectedTodo(data)

        // console.log(data)
    }

    function handleSave(){
        let updatedTitle = selectedTodo.title;

        let data = [...todos];

        let result = data.filter((ele,index) => {
            if(ele.id == selectedTodo.id){
                // ele.completed = !ele.completed
                ele.title = updatedTitle
            }
            return ele;
        });
        // console.log(result, 'result')
        setTodos(result);

        setShowModal(false)

    }
    return(
        <div>
            <h1 className="text-center"> Todos</h1>

            <div className="d-flex justify-content-center gap-2 align-items-center">
                <input type="text" 
                value={inputTitle}
                onChange={(event) => handleTitle(event)}
                placeholder="enter the title"/>
                <button className="btn btn-primary" onClick={() => handleAdd()}>Add</button>
            </div>

        

    {
        showModal ? (
            <div> <div class="modal d-block" tabindex="-1">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Updated title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleClose()}></button>
      </div>
      <div class="modal-body">
        <label htmlFor="">Title : </label>
        <input value={selectedTodo.title}
        type="text" 
        placeholder="enter updated title"
        onChange={(event) =>handleUpdatedTitle(event)}
        /> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleClose()}>Close</button>
        <button type="button" class="btn btn-primary" onClick={() =>handleSave()}>Save changes</button>
      </div>
    </div>
  </div>
</div> </div>
        ): null
    }

            {
                todos.map((ele, index) =>(
                    <div 
                    key={index} 
                    className="d-flex gap-3 mt-2 justify-content-center  align-items-center">

                    <EachTodo ele={ele} index={index}
                    handleCheckbox={handleCheckbox}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}/>
                    
                    </div>

                ))
            }

        </div>
    );
}
export default Todos;