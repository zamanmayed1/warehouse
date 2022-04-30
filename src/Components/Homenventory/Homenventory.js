import React from 'react';

const Homenventory = () => {
    return (
        <div className='md:p-10'>
            <h2 className='text-xl my-5 font-bold text-indigo-400'>Inventory</h2>
            <div className='md:grid md:grid-cols-2 gap-8 '>

                <div class="flex justify-center md:h-auto overflow-hidden my-3">
                    <div class="flex border md:h-[260px] p-3 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img class="  md:h-auto h-[135px] object-cover w-48 mx-auto md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/MNnFBkg/New-Project.png" alt="" />
                        <div class="p-1 flex flex-col justify-start text-left">
                            <h5 class="text-gray-900 text-xl font-medium mb-1">Shodagor Katari-Nazir Rice</h5>
                            <h5 class="text-gray-900  font-medium mb-1">Price :  1,680.00</h5>
                            <h5 class="text-gray-900  font-medium mb-1">Quantity : 150 </h5>
                            <h5 class="text-gray-900  font-medium mb-1">Supplier Name: Abul Mal</h5>
                            <p class="text-gray-700 text-base mb-1">
                            Shodagor Katari-Nazir rice is white & extra long in size, has a beautiful aroma. Its properties have a high nutritious value.
                            </p>
                            <button className='border rounded-lg font-bold  bg-[#7735B6] p-1 w-[150px] text-white  '>Update Stock</button>
                        </div>
                    </div>
                </div>







            </div>
        </div>
    );
};

export default Homenventory;