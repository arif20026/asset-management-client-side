import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const EmployeeHome = () => {

    const { user } = useContext(AuthContext)
    console.log(user.email)

    const url = `http://localhost:5000/customRequests?email=${user?.email}`
    console.log(url)

    const [customRequests, setCustomRequests] = useState([]);
    const [selectedCustomRequest, setSelectedCustomRequest] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCustomRequests(data);
                setLoading(false);
            });
    }, [])

    const openModal = (customRequest) => {
        setSelectedCustomRequest(customRequest);
        document.getElementById("my_modal_1").showModal();
      };
    
      const closeModal = () => {
        setSelectedCustomRequest(null);
        document.getElementById("my_modal_1").close();
      };

    // const handleOpenModal = (_id) => {

    //     console.log(_id)

    //     document.getElementById(_id).showModal()



    // }


    return (
        <div>



            <div>
                <h3 className="text-center text-4xl font-bold">My Custom Requests</h3>
                {
                    customRequests?.map(customRequest => <div className="my-8"
                        key={customRequest._id}>
                        <img src={customRequest.image} alt="" />
                        <p> <span className="font-bold">Asset Name :</span>{customRequest.name}</p>
                        <p> <span className="font-bold">Price :</span>{customRequest.price}</p>
                        <p> <span className="font-bold"> Asset Type :</span>{customRequest.type}</p>
                        <p> <span className="font-bold"> Status:</span>{customRequest.whyNeeded}</p>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* 
                        <button className="btn btn-primary" onClick={() => handleOpenModal(customRequest._id)}>View Details</button> */}
                        <button className="btn btn-primary" onClick={() => openModal(customRequest)}>View Details</button>

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <img src={customRequest.image} alt="" />
                                <p> <span className="font-bold">Asset Name :</span>{selectedCustomRequest?.name}</p>
                                <p> <span className="font-bold">Price :</span>{selectedCustomRequest?.price}</p>
                                <p> <span className="font-bold"> Asset Type :</span>{selectedCustomRequest?.type}</p>
                                <p> <span className="font-bold"> Why you need this :</span>{selectedCustomRequest?.whyNeeded}</p>
                                <p> <span className="font-bold">Additional information :</span>{selectedCustomRequest?.additionalInfo}</p>
                                <p> <span className="font-bold"> Status:</span>{selectedCustomRequest?.whyNeeded}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn" onClick={closeModal}>Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>






                    </div>)
                }

            </div>


        </div>
    );
};

export default EmployeeHome;







