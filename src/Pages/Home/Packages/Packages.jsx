import React from 'react';

const Packages = () => {
    return (
        <div className='mx-10 my-14'>
            <h3 className='text-center my-4 font-bold text-4xl'>Our Packages</h3>
            <div className='flex gap-4 '>
            <div className="card w-96  bg-blue-100 shadow-xl text-center">
                
                <div className="card-body text-center  items-center justify-center">
                    <h2 className="card-title">Maximum 5 employees</h2>
                    <p className='font-bold'>Price: $5</p>
                   
                </div>
            </div>
            <div className="card w-96 bg-green-100 shadow-xl">
                
                <div className="card-body text-center  items-center justify-center">
                    <h2 className="card-title">Maximum 10 employees</h2>
                    <p className='font-bold'>Price: $8</p>
                  
                </div>
            </div>
            <div className="card w-96 bg-yellow-100 shadow-xl">
                
                <div className="card-body text-center  items-center justify-center">
                    <h2 className="card-title">Maximum 20 employees</h2>
                    <p className='font-bold'>Price: $15</p>
                  
                </div>
            </div>
        </div>
        </div>
    );
};

export default Packages;