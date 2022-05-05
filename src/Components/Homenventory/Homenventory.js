import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SpinnerInfinity } from 'spinners-react';

const Homenventory = () => {
    const [inventory, setInventory] = useState()
    useEffect(() => {
        fetch('https://stockroom-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    let navigate = useNavigate();
    const updatetock = (id) => {
        navigate(`inventory/${id}`)
    }
    return (
        <div className='md:p-10'>
             <h2 className='text-xl md:text-2xl my-5 font-bold text-indigo-400'>Inventory</h2>
            {
                inventory ? <>
               
           
           <div className='md:grid md:grid-cols-2 gap-8 '>

               {
                   inventory.slice(0, 6).map(item => <div key={item?._id} className="flex justify-center md:h-auto overflow-hidden my-3">
                       <div className="flex border md:h-[260px] p-3 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                           <img className=" homeimage md:h-auto h-[135px] object-cover w-48 mx-auto md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item?.img} alt="" />
                           <div className="p-1 pl-2 flex flex-col justify-start text-left">
                               <h5 className="text-gray-900 font-bold  mb-1">{item?.name}</h5>
                               <h5 className="text-gray-900  mb-1 ">Price :  {item?.price}</h5>
                               <h5 className="text-gray-900  text-sm   mb-1">Quantity :{item?.quantity}</h5>
                               <h5 className="text-gray-900 text-sm   mb-1">Supplier Name: {item?.suppliername}</h5>
                               <p className="text-gray-700 text-sm  mb-6" title={item?.description}>
                                   {
                                       item?.description.slice(0, 70)
                                   }[...]
                               </p>
                               <button onClick={() => { updatetock(item?._id) }} type="button" className="inline-block w-[150px] px-6 py-2.5 bg-blue-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">update Stock</button>
                           </div>
                       </div>
                   </div>)
               }

               <div>

               </div>

           </div>
           <Link to={'/manageinventory'}>

               <button className="inline-block w-[190px] px-6 py-2.5 bg-blue-500 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Manage Inventories</button>
           </Link></>
           :
           <SpinnerInfinity className="mx-auto" size={57} thickness={180} speed={100} color="#1A56DB" secondaryColor="rgba(73, 57, 172, 0.44)" />
            }
        </div>
    );
};

export default Homenventory;