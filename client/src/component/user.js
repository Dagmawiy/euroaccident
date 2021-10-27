import React from 'react'
import {useHistory} from "react-router-dom";
const Userinfo = () => {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const history = useHistory();
    const sigenOut = (() =>{
        localStorage.clear();
        history.push('/');
    });

    return (
        <div className="card-header bg-white border-0">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h4 className="h4 font-weight-bold m-0">{user.name}</h4>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                     <button className="btn rounded-button-xl base-bg-color border-0 text-white btn-sm pull-right " onClick={sigenOut}>Logga ut </button>

                </div>

            </div>
            
        </div>
    )
}

export default Userinfo;