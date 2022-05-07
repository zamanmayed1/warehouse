import React from 'react';

const BestSupplier = () => {
    return (
        <div className='bg-[#F0F2F5] py-6'>
                        <h2 className='text-xl md:text-2xl  font-bold text-indigo-400'>Our Best Supplier</h2>

            <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full text-center">
     
      <div className="mt-12 mb-6 flex justify-center">
        <img
          src="https://i.ibb.co/C0m3GSz/Rectangle-17.png"
          className="shadow-lg"
          alt="smaple image"
        />
      </div>
      <p className="text-gray-600 font-bold md:text-2xl">Anna Morian</p>
    </div>
    <div className="carousel-item relative float-left w-full text-center">
      
      <div className="mt-12 mb-6 flex justify-center">
        <img
          src="https://i.ibb.co/H2qQh2J/Rectangle-18.png"
          className=" shadow-lg"
          alt="smaple image"
        />
      </div>
      <p className="text-gray-600 font-bold md:text-2xl"> Teresa May</p>
    </div>
    <div className="carousel-item relative float-left w-full text-center">
    
      <div className="mt-12 mb-6 flex justify-center">
        <img
          src="https://i.ibb.co/gr71Nkc/Rectangle-15.png"
          className=" shadow-lg"
          alt="smaple image"
        />
      </div>
      <p className="text-gray-600 font-bold md:text-2xl">Kate Allise</p>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default BestSupplier;