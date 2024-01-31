import { useEffect } from "react";
import { useState } from "react";

const CustomRequestList = () => {

    const [customRequests, setCustomRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/customRequests')
            .then(res => res.json())
            .then(data => {
                setCustomRequests(data);
                setLoading(false);
            });
    }, [])

    
    return (
        <div>

           {
            customRequests.map( customRequest => <div className="my-8"
                 key={customRequest._id}>
                    <img src={customRequest.image} alt="" />
                    <p> <span className="font-bold">Asset Name :</span>{customRequest.name}</p>
                    <p> <span className="font-bold">Price :</span>{customRequest.price}</p>
                    <p> <span className="font-bold"> Asset Type :</span>{customRequest.type}</p>
                    <p> <span className="font-bold"> Why you need this :</span>{customRequest.whyNeeded}</p>
                    <p> <span className="font-bold"> Additional information :</span>{customRequest.additionalInfo}</p>
                    <button className="btn btn-primary mx-2">Approve</button>
                    <button className="btn btn-secondary">Reject</button>
                    </div>)
           }
            
        </div>
    );
};

export default CustomRequestList;