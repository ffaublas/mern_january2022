import React, {useState} from 'react';

const Box = (props) =>{
    //creating state variable(s) to keep track of information collected on the form
    let [boxColor, setBoxColor ] = useState("");

    let [listOfBoxes, setListOfBoxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault(); 
    

    console.log("New Box Created")

    let boxObj = {boxColor}
    console.log(boxObj);

    setListOfBoxes([...listOfBoxes, boxObj])

    }

    return (
        <>
            <form onSubmit = {createBox}> 
                <div className="form-group">
                    <label htmlFor="">Box Generator:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setBoxColor(e.target.value)} />
                </div>
                <input type="submit" value="Add" />
            </form>
            <hr />
            <h3>Here is the Coded Box Generator</h3>

            {
                listOfBoxes.map((box)=>{
                    return (
                        <div style = {{border: "1px solid black", backgroundColor: box.boxColor, display: 'inline-block'}}>
                            <p><img src={box.imageUrl} alt="" width = "100px"/></p>
                        </div>

                    )
                })
            }
        </>
    )

}

export default Box;