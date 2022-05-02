import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
const ManageInventory = () => {
    const [inventory, setInventory] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://stockroom-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    const deletitem = (id) => {
    
            fetch(`https://stockroom-server.herokuapp.com/inventory/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json(id))
                .then((json) => {
                   if (json.acknowledged) {
                    toast("Delete Successful!")
                    const remaining = inventory.filter(item => item._id !== id )
                    setInventory(remaining)
                    
                   }
                });
          
           

        
    }
    const additem = () => {
        navigate('/additem')
    }
    return (
        <div className='py-6 mb-20'>
            <h2 className='text-xl md:text-2xl my-5 font-bold text-indigo-400'>Manage Inventory : {inventory.length}</h2>

            <button onClick={additem} className='border border-blue-600 my-2 mb-4 font-bold p-2'>Add New Item</button>

            <div className="hidden md:block flex flex-col md:w-3/4 mx-auto border text-left">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>

                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        inventory.map(item => <tr key={item._id} className="bg-gray-50 border-b">

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item?.name}
                                            </td>
                                            <td className="text-sm text-blue-500 font-light px-6 py-4 whitespace-nowrap">
                                                {item?.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item?.quantity}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => deletitem(item?._id)} className='border border-red-600 p-2'>Delete</button>
                                            </td>
                                        </tr>)

                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden ' >
                {

                    inventory.map(item =>
                        <div className='w-full shadow-md p-2 my-2' key={item?._id}>
                            <h2 className='font-bold text-xl'> Name : {item?.name}</h2>
                            <h2 className='text-blue-500'>Email {item?.email}</h2>
                            <h2 >Quantity {item?.quantity}</h2>
                            <button onClick={() => deletitem(item?._id)} className='border text-white bg-red-600 rounded-lg px-4 py-1 my-2'>Delete</button>
                        </div>
                    )

                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageInventory;