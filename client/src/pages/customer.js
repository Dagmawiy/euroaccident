import React, {useEffect, useState} from 'react'
import Insurance from '../actions/userInsurance';
import ListInsurance from '../component/cards/listInsurance';
import IsLoding from '../component/isLoading';
import User from '../component/user';
function Customer() {
    
    const [userInsurances, setInsurance] = useState([]);
    const [isLoding, setLoding] = useState(false);

    const userInsurance = ( () => {
        Insurance().then((res) =>{
            if(res.data){
                setInsurance(res.data);

                setLoding(false);
            }

        });
    });
    
    useEffect(() => {
        setLoding(true)
        setTimeout(() => {
            userInsurance();
        }, 2000);
        
    }, []);

    return (
        <>
            {isLoding ? <IsLoding /> :
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-xs-6 col-sm-5 mt-5 col-md-6 col-lg-6 mx-auto">
                            <div className="card mt-5 shadow border-0 p-3 border-rounded-xl ">
                            <User />  
                            <div className="card-body ">
                                <ul className="list-group">
                                    {
                                        userInsurances.map((items, index) => {
                                            return <ListInsurance key={index} 
                                                    title={items.title} 
                                                    content={items.body} 
                                                    url={items.url} 
                                                    preamble={items.preamble}
                                                    />
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Customer;