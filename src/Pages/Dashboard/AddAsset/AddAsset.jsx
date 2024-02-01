import Swal from "sweetalert2";

const AddAsset = () => {

    const handleAddAsset =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
      
        const type = form.type.value;
        const quantity = form.quantity.value;
        const currentDate = new Date()
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        console.log(name, type,quantity)

        const AddItem ={name, type, quantity,date:formattedDate}
    
    
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(AddItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Product Added",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }

            })
    
    
    }       
    return (
        <div>
             <form onSubmit={handleAddAsset} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Product Name</span>
                            </label>
                            <input type="text" name='name' placeholder=" Product Name" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Product Type</span>
                            </label>
                            <input type="text" name='type' placeholder="Product Type" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Product Quantity" className="input input-bordered required" />
                        </div>
                       
                       

                        <input className="btn btn-primary w-full mt-3" type="submit" value="Add" />
                       
                    </form>

            
        </div>
    );
};

export default AddAsset;