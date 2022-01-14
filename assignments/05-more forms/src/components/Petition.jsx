import React, { useState } from  'react';

const Petition = (props) => {

    let [fname, setFname] = useState(""); 
    let [lname, setLname] = useState("");  
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [passwordconf, setPasswordConf] = useState("");


    return (
        <div>
            <h1>Sign this petition if you are looking for positive change</h1>
            <form action="">
                {/* <h3>{ formMessage() }</h3> */}
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange= {(e)=> setFname(e.target.value)} />

                    {
                        fname.length < 2 ?
                        <p className = "text-danger">Name must be at least 2 characters long. Current character spacing is: {fname.length}</p>:
                        ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange= {(e)=> setLname(e.target.value)} />

                    {
                        lname.length < 2?
                            <p className = "text-danger">Name must be at least 2 characters long. Current character spacing is: {lname.length}</p>
                            :""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" id="" className="form-control" onChange= {(e)=> setEmail(e.target.value)} />

                    {
                        email.length < 8?
                            <p className = "text-danger">Email must be at least 8 characters long. Current character spacing is: {lname.length}</p>
                            :""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange= {(e)=> setPassword(e.target.value)} />

                    {
                        password.length < 8?
                            <p className = "text-danger">Password must be at least 8 characters long. Current character spacing is: {password.length}</p>
                            :""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange= {(e)=> setPasswordConf(e.target.value)} />

                    {
                        passwordconf !== password?
                            <p className = "text-danger">Password Confirmation must match password created above. Current character spacing is: {passwordconf.length}</p>
                            :""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <hr />

            <p>First Name: {fname} </p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passwordconf}</p>


        </div>
        
    );

};

export default Petition;