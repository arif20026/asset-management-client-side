import { useEffect, useState } from "react";

const RequestAsset = () => {



    const [summaryData, setSummaryData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('http://localhost:5000/api/assetSum')
            .then(response => response.json())
            .then(data => setSummaryData(data))
            .catch(error => console.error(error));
    }, []);

    console.log(summaryData)

    return (
        <div>

            <h3 className="font-bold text-4xl text-center">Asset List Section</h3>

            {

                summaryData?.map((product, index) => <div className="my-8"
                    key={index}>
                    <p> <span className="font-bold">Asset Name : </span>{product._id}</p>
                    <p> <span className="font-bold">Type : </span>{product.type}</p>
                    {

                        product.totalQuantity > 0 ?
                            <div>
                                <p><span className="font-bold">Availability:</span> Available</p>

                                <button className="btn btn-primary mx-4" onClick={() => document.getElementById('my_modal_1').showModal()}>Request</button>

                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <div className="modal-action">
                                        

                                            <div className="flex flex-col space-y-8">

                                            <form className="space-x-8">
                                                <input type="text" placeholder="Additional notes" className="border border-black"/>
                                                <input type="submit"  className="btn btn-primary" value="Request" />
                                            </form>

                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>

                                            </div>
                                           
                                            
                                        </div>
                                    </div>
                                </dialog>


                            </div>
                            :
                            <div>

                                <p><span className="font-bold">Availability:</span> Out of Stock</p>
                                <button className="btn btn-primary mx-4" disabled>Request</button>
                            </div>

                    }


                </div>)

            }

        </div>
    );
};

export default RequestAsset;