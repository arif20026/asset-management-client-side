import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const CustomRequest = () => {

    const {user} =useContext(AuthContext)
    const handleRequestAsset = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const type = form.type.value;
        const whyNeeded = form.whyNeeded.value;
        const additionalInfo = form.additionalInfo.value;
        const email= user.email
        console.log(name, price,type,whyNeeded,additionalInfo,image)

        const requestedItem ={name, price,type,whyNeeded,additionalInfo,image,email}
    
    
        fetch('http://localhost:5000/customRequests', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(requestedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Request Placed",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }

            })
    
    
    }       


    return (
        <div>

            <form onSubmit={handleRequestAsset} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Asset Name</span>
                            </label>
                            <input type="text" name='name' placeholder=" Asset Name" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Asset Type</span>
                            </label>
                            <input type="text" name='type' placeholder="Asset Type" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Asset Image</span>
                            </label>
                            <input type="text" name='image' placeholder=" Asset Image" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Why you need this</span>
                            </label>
                            <input type="text" name='whyNeeded' placeholder=" Why you need this" className="input input-bordered required" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Additional information</span>
                            </label>
                            <input type="text" name='additionalInfo' placeholder="Additional information" className="input input-bordered required" />

                        </div>

                        <input className="btn btn-primary w-full mt-3" type="submit" value="Request" />
                       
                    </form>

            
        </div>
    );
};

export default CustomRequest;