import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import loginUser from '../actions/signin';

function Auth() {
    const history = useHistory();
    const [account, setAccount] = useState({
        username : ""
    });
    
    const [errorMessege, setErrors] = useState();

    const handelOnchang =((e) =>{
        e.preventDefault();
        const value = e.target.value;
        setAccount({
            ...account, 
                [e.target.name] : value
        });

        setErrors('');
    });


    const handleSubmit = ((e) => {
        e.preventDefault();
        loginUser(account).then((res) =>{
            const loggedin = res.success;
           
                if(loggedin)
                    history.push('/insurances');
                else
                    setErrors(res.user);    
          

         
        });
        
    });

  return (
    <>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xs-6 col-sm-5 col-md-5 col-lg-5 mx-auto">
                    <div className="card card-mid shadow border-0 p-3 border-rounded-xl ">
                        <form id="loginForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputUsername" className="font-weight-bold">Logga in med ditt användarnamn</label>
                                <input 
                                    type="text" 
                                    className="form-control base-border-color form-control-sm  mt-3 " 
                                    id="inputEmail1" 
                                    aria-describedby="usernameHelp" 
                                    placeholder="Ange ditt användarnamn"
                                    name="username"
                                    onChange={handelOnchang}
                                    value={account.username}
                                />
                              {errorMessege ? <p className="text-danger">{ errorMessege } </p> : ''}
                            </div>
    
                            <button type="submit" className="btn rounded-button-xl base-bg-color btn-block border-0 text-white btn-sm my-2 ">Logga in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Auth;
