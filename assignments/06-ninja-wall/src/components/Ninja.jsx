import React, {useState} from 'react';

const Ninja = (props) =>{
    //creating state variable(s) to keep track of information collected on the form
    let [ninjaName, setNinjaName ] = useState("");
    let [imageUrl, setImageUrl ] = useState("");
    let [favColor, setFavColor ] = useState("");

    // let listOfNinjas = [];
    //create a state variable to store every ninja taht was submitted on the form
    let [listOfNinjas, setListOfNinjas] = useState([]);

    const createNinja = (e) => {
        e.preventDefault(); //the default behavior (of a form) when submitting is to reload the the entire page.  We want to prevent that from happening because we dont want th epage to reload.
        console.log("submitted the form") 
        let ninjaObj = {ninjaName, imageUrl, favColor}
        console.log(ninjaObj);

        setListOfNinjas([...listOfNinjas, ninjaObj]) //purpose of ... is to keep/store previous list of ninjas, while ninjaObj will add a new ninja to the list of ninjas.
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
                listOfNinjas.map((ninja)=>{
                    return (
                        <div style = {{border: "1px solid black", backgroundColor: ninja.favColor, display: 'inline-block'}}>
                            <h3>{ninja.ninjaName}</h3>
                            <p><img src={ninja.imageUrl} alt="" width = "100px"/></p>
                            <p>Favorite color: {ninja.favColor}</p>
                        </div>

                    )
                })
            }
        </>
    )
}


export default Ninja;