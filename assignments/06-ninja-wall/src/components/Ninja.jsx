import React, {useState} from 'react';
// import styles from './Ninja.module.css';

const Ninja = () =>{
    //creating state variable(s) to keep track of information collected on the form
    let [ninjaName, setNinjaName ] = useState("");
    let [imageUrl, setImageUrl ] = useState("");
    let [favColor, setFavColor ] = useState("");
    // This state variable is to toggle the student's graduation status
    let [graduated, setGraduated] = useState(false)

    // let listOfNinjas = [];
    //create a state variable to store every ninja that was submitted on the form
    let [listOfNinjas, setListOfNinjas] = useState([]);

    const createNinja = (e) => {
        e.preventDefault(); //the default behavior (of a form) when submitting is to reload the the entire page.  We want to prevent that from happening because we dont want th epage to reload.
        console.log("submitted the form") 
        let ninjaObj = {ninjaName, imageUrl, favColor, graduated}
        console.log(ninjaObj);

        setListOfNinjas([...listOfNinjas, ninjaObj]) //purpose of ... is to keep/store previous list of ninjas, while ninjaObj will add a new ninja to the list of ninjas.
    }

    //toggle graduation for studnet function that gets called when the checkbox is clicked
    const toggleGraduation = (idx)=>{
        console.log("Trying to graduate this student - > logging idx of student here:" ,idx)
        //create a copy of list of ninjas, then update the list of ninjas array at specific index of sutdne we wnat to graduate to hae their graduation property = true. 
        let [...copyOfListOfNinjas] = listOfNinjas;

        //update teh graduation status of the student to be the opposite of whatever it currently is (ex. true to false; or false to true)
        copyOfListOfNinjas[idx].graduated = !copyOfListOfNinjas[idx].graduated

        //update the state variable with this newly updated information by using the setter - it is now this modified copy
        setListOfNinjas(copyOfListOfNinjas);
    }

    return (
        <>
            <form onSubmit = {createNinja}> 
                <div className="form-group">
                    <label htmlFor="">Ninja name:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setNinjaName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Url:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setImageUrl(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setFavColor(e.target.value)}/>
                </div>
                <input type="submit" value="Create Ninja!" />
            </form>
            <hr />
            <h3>Here are our list of Ninjas</h3>

            {
                listOfNinjas.map((ninja, i)=>{
                    return (
                        <div key = {i} style = {{border: "1px solid black", backgroundColor: ninja.favColor, display: 'inline-block', textDecoration: ninja.graduated? 'line-through': 'none'}}>
                            <h3>{ninja.ninjaName} - Student ID # {i}</h3>
                            <p><img src={ninja.imageUrl} alt="" width = "100px"/></p>
                            <p>Favorite color: {ninja.favColor}</p>
                            <p><input type="checkbox" onClick = {()=>toggleGraduation(i)}/>Graduate</p>
                        </div>

                    )
                })
            }
        </>
    )
}


export default Ninja;