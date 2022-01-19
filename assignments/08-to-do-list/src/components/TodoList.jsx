import React, {useState} from 'react';

const TodoList = (props) =>{
    let [newTodo, setnewTodo ] = useState("");
    // let [addTodo, setaddTodo ] = useState("");
    
    let [graduated, setGraduated] = useState(false)

    let [listOfTodos, setlistOfTodos ] = useState([]);

    const createTodo = (e) => {
        e.preventDefault();
        console.log("submitted the form")
        let todoObj = {taskname:newTodo, isComplete:false}
        // console.log(todoObj);

        setlistOfTodos([...listOfTodos, todoObj])
    }

    const toggleNewbelt = (idx) => {
        console.log("Did this student pass the cohort exam - > logging idx for student here: ,idx")
        let [...copyOfListOfTodos] = listOfTodos;

        copyOfListOfTodos[idx].isComplete = !copyOfListOfTodos[idx].isComplete;

        setlistOfTodos(copyOfListOfTodos);
    }

    const deleteTask = (idx) => {
        console.log("deleting the task at index -->", idx)
        let newList = listOfTodos.filter((todoObj, i)=>{
            return i != idx
        })

        setlistOfTodos(newList);

    }

    return (
        <>
            <form onSubmit={createTodo}>
                <div className="form-group">
                    <label htmlFor="Get { newtodo } Black Belt"></label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setnewTodo(e.target.value)}/>
                </div>
                <input type="submit" value="Add" className="btn btn-success mt-3" />

                
            
            </form>
            
            {
                listOfTodos.map((todo, i)=>{
                    return (
                        <div key = {i} style = {{textDecoration: todo.isComplete? 'line-through': 'none'}} >
                            <p><input type="checkbox" onClick = {() => toggleNewbelt(i)} />{todo.taskname}</p>
                            <p><button onClick = {() =>deleteTask(i)}  className= "btn btn-danger">Delete</button></p>
                        </div>
                    )
                }) 

            }
            
        </>
    )

}


export default TodoList;