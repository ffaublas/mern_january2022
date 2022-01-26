import React, {useState} from 'react';
import axios from 'axios';

const NewForm = () => {

    //state variables for each info collected from form
    let [setUp, setSetup] = useState("")
    let [punchLine, setPunchLine] = useState("")
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(0)
    let [isVeteran, setIsVeteran] = useState(false)

    const createSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(setUp, punchLine, firstName, lastName, numBelts, isVeteran)

        //put the info from form into an object
        let formInfoObj = {setUp, punchLine, firstName, lastName, numBelts, isVeteran};

        axios.post("http://localhost:8001/api/jokes/new", formInfoObj)
            .then(res=>{
                console.log("response after posting", res)
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <form onSubmit = {createSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Setup</label>
                    <input onChange = {(e)=>{setSetup(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">PunchLine</label>
                    <input onChange = {(e)=>{setPunchLine(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange = {(e)=>{setFirstName(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange = {(e)=>{setLastName(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input onChange = {(e)=>{setNumBelts(e.target.value)}} type="number" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Jokester a Veteran?</label>
                    <input onChange = {(e)=>{setIsVeteran(e.target.checked)}} type="checkbox" name="" id="" className="form-checkbox" />
                </div>
                <input type="submit" value="Create Joker!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewForm;
