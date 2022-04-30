import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const { id } = useParams()
   const [inventory, setInventory] = useState({})
   const{img, name,price,quantity,description,suppliername} = inventory
   console.log(inventory);
    useEffect(()=>{
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[])
    return (
        <div className='h-auto py-6 mb-24' >
             <h2 className="text-xl font-bold underline text-indigo-500">
                {name}
                </h2>
            <div className=" md:p-5 w-3/4 mx-auto md:grid grid-cols-3 gap-4" >
                        <div className="border h-[350px] p-3">
                            <img className='w-full' src={img} alt="" />
                        </div>
                        <div className=" py-3 px-2 h-auto col-span-2 text-left">
                            <h3 className="text-2xl mb-2 font-bold">
                             {name}
                            </h3>
                            <h3 className="text-sm mb-2  text-blue-500">
                             {suppliername}
                            </h3>
                            <hr />
                            <h3 className='mb-2 text-xl'>
                            Price :   <span className="font-bold">{price} BDT</span>
                            </h3>
                            <h3 className='mb-2'>
                           Quantity :   <span className="font-bold border px-2 mx-3">{quantity}</span>
                            </h3>
                            <h3 className='mb-2'>
                           Description :   <span className="font-bold  ">{description}</span>
                            </h3>
                            <button type='button' className="inline-block w-[150px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>
                        </div>


            </div>
            <div className="border-b w-1/4 border-gray-30 mx-auto"></div>
            <div>
                <h2 className="text-xl font-bold text-indigo-500 my-3">
                Restock Item
                </h2>
                <div className="flex justify-center items-center content-center w-full ">
                
          <input
            type="text"
            className="
              form-control
              
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlInput1"
            placeholder="Add Quantity"/>
      

          <button type="button" className=" mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Now</button>
  
                </div>
            </div>
               

            </div>
        
       
    );
};

export default SingleInventory;