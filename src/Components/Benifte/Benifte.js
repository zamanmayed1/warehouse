import React from 'react';

const Benifte = () => {
    return (
        <div className='h-auto md:p-10 p-3'>
            <div className="md:container md:flex flex-row-reverse" >
                <div className='md:w-2/4'>
                    <img className='w-4/6 block mx-auto' src="https://i.ibb.co/fnKRdwY/boxy-and-bucky-3x.webp" alt="" />
                </div>
                <div className='md:w-2/4 text-left py-10 px-2' >
                    <h1 className='text-2xl font-bold mb-3'>Track manufacturing costs and components</h1>
                    <p className='mb-3'>
                    If you sell kits or assemble your own products, it can be tough to track all of the little costs that go into the process. inFlow simplifies manufacturing by connecting your bill of materials directly to your final products.
                    </p>
                    <p className='mb-3'>
                    With all of your product and cost data already in your inventory software, you can assemble new products and project the costs (and profit!) on each build. Pricing your final products is going to get so much easier.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Benifte;