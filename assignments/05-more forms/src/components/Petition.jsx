import React, { useState } from  'react';

const Petition = (props) => {

    let [fname, setFname] = useState(null); 
    let [lname, setLname] = useState(null); 
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [passwordconf, setPasswordConf] = useState(null);



    return (
        <div>
            <h1>Sign this petition if you are looking for positive change</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange= {(e)=> setFname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange= {(e)=> setLname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" id="" className="form-control" onChange= {(e)=> setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange= {(e)=> setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange= {(e)=> setPasswordConf(e.target.value)} />
                </div>
                <input type="submit" value="Sign Here!" />
            </form>
            <hr />

            <p>First Name: {fname} </p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passwordconf}</p>


        </div>
        
    )

}


export default Petition;