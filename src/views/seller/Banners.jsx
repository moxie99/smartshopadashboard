import React from 'react';
import { Link } from 'react-router-dom';

const Banners = () => {
  return (
    <div className='px-2 lg:px-7 pt-5'>
      <div className='w-full p-4  bg-primary rounded-md'>
        <div className='flex justify-between items-center pb-4'>
          <h1 className='text-white text-xl font-semibold'>Add Product</h1>
          <Link
            className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 '
            to='/seller/dashboard/products'
          >
            Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banners;
