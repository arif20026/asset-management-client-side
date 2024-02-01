import { useEffect, useState } from "react";

const AssetList = () => {

   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'http://localhost:5000/products'
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, [])

   
    return (
        <div>

            <h3 className="font-bold text-4xl text-center">Asset List Section</h3>

            {

                products?.map(product => <div className="my-8"
                    key={product._id}>
                    <img src={product.image} alt="" className="w-28 h-28" />
                    <p> <span className="font-bold">Asset Name : </span>{product.name}</p>
                    <p> <span className="font-bold"> Asset Type : </span>{product.type}</p>
                    <p> <span className="font-bold">Quantity : </span>{product.quantity}</p>
                    <p> <span className="font-bold">Date Added : </span>{product.date}</p>
                    <button className="btn btn-primary mx-4">Update</button>
                    <button className="btn btn-primary">Delete</button>

                </div>)

            }

        </div>
    );
};

export default AssetList;