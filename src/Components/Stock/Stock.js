import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerInfinity } from 'spinners-react';

const Stock = () => {
    const [inventory, setInventory] = useState()
    useEffect(() => {
        fetch('https://stockroom-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    let navigate = useNavigate();
    const updatetock = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div >
            <div className='h-[30vh] flex items-center justify-center stockheader'>
                    <h1 className='md:text-3xl text-2xl text-indigo-500'>Stock</h1>
            </div>
           
            { inventory ?
             <div className='grid grid-cols-1 md:grid-cols-3 md:p-8 gap-6'>
                  { inventory?.map(item => <div key={item?._id} className=" md:h-auto  my-3">
                       <div className=" border  p-3  md:max-w-xl rounded-lg bg-white shadow-lg">
                           <img className=" homeimage md:h-auto h-[135px] object-cover w-48 mx-auto md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item?.img} alt="" />
                           <div className="p-1 pl-2 flex flex-col justify-start text-left">
                               <h5 className="text-gray-900 font-bold  mb-1">{item?.name}</h5>
                               <h5 className="text-gray-900  mb-1 ">Price :  {item?.price}</h5>
                               <h5 className="text-gray-900  text-sm   mb-1 ">Quantity :{item?.quantity >= 1 ? item?.quantity : <span className='text-red-500 border font-bold p-1 m-1'>Out Of Stock</span> }</h5>
                               <h5 className="text-gray-900 text-sm   mb-1">Supplier Name: {item?.suppliername}</h5>
                               <p className="text-gray-700 text-sm  mb-6" title={item?.description}>
                                   {
                                       item?.description.slice(0, 70)
                                   }[...]
                               </p>
                               
                           </div>
                           <button onClick={() => { updatetock(item?._id) }} type="button" className="inline-block w-[150px] px-6 py-2.5 bg-blue-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view details</button>
                       </div>
                   </div>) }
                    </div> : 
                    <SpinnerInfinity className="mx-auto h-[50vh]" size={57} thickness={180} speed={100} color="#1A56DB" secondaryColor="rgba(73, 57, 172, 0.44)" />
               }

           
           

        </div>
    );
};

export default Stock;