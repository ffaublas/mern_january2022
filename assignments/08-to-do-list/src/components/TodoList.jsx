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

    const TodoDelete = (delidx) => {
        // const filterTodo = addTodo.filter((todo, i) => {
        //     return i != delidx;
        // });

        // setnewTodo(filterTodo);
    }

    return (
        <>
            <form onSubmit={createTodo}>
                <div className="form-group">
                    <label htmlFor="Get { newtodo } Black Belt"></label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setnewTodo(e.target.value)}/>
                </div>
                <input type="submit" value="Add" />

                
            
            </form>
            
            {
                listOfTodos.map((todo, i)=>{
                    return (
                        <div key = {i} style = {{textDecoration: todo.isComplete? 'line-through': 'none'}} >
                            <p><input type="checkbox" onClick = {() => toggleNewbelt(i)} />{todo.taskname}</p>
                            <button onClick = {(e)=>{TodoDelete(i);}}>Delete</button>
                        </div>
                    )
                }) 

            }
            
        </>
    )

}


export default TodoList;