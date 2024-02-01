import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCustomRequest = () => {

    const product = useLoaderData()

    // console.log(product)
    const { _id,name, price, type, whyNeeded, additionalInfo, image } = product

    console.log(product)

    const handleUpdateCustomRequest = event => {
        event.preventDefault();
        const form = event.target;
        const updatedName = form.name.value;
        const updatedPrice = form.price.value;
        const updatedImage = form.image.value;
        const updatedType = form.type.value;
        const updatedWhyNeeded = form.whyNeeded.value;
        const updatedAdditionalInfo = form.additionalInfo.value;
        // const email= user.email

        const UpdatedRequestedItem = { updatedName, updatedPrice, updatedImage, updatedType, updatedWhyNeeded, updatedAdditionalInfo }



        // sending Updated Blog to server

        fetch(`http://localhost:5000/customRequests/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(UpdatedRequestedItem)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Request Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

  

return (
    <div>

        <form onSubmit={handleUpdateCustomRequest} >
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Asset Name</span>
                </label>
                <input defaultValue={name}  type="text" name='name' placeholder=" Asset Name" className="input input-bordered required" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Price</span>
                </label>
                <input defaultValue={price} type="text" name='price' placeholder="Price" className="input input-bordered required"  />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Asset Type</span>
                </label>
                <input type="text" name='type' placeholder="Asset Type" className="input input-bordered required" defaultValue={type}/>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Asset Image</span>
                </label>
                <input type="text" name='image' placeholder=" Asset Image" className="input input-bordered required" defaultValue={image} />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Why you need this</span>
                </label>
                <input type="text" name='whyNeeded' placeholder=" Why you need this" className="input input-bordered required" defaultValue={whyNeeded}  />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Additional information</span>
                </label>
                <input type="text" name='additionalInfo' placeholder="Additional information" className="input input-bordered required" defaultValue={additionalInfo}  />

            </div>

            <input className="btn btn-primary w-full my-3" type="submit" value="Save" />

        </form>
        <Link to="/dashboard/home"><button className="btn btn-primary w-full my-4" >Cancel</button></Link>

    </div>
);
};

export default UpdateCustomRequest;