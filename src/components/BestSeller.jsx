import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

export const BestSeller = () => {
  const { products } = useAppContext(); 


  return (
    <div className='mt-16'>
      <div>
        <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">
        New Arrivals
      </h1>
      <p className="text-slate-600 mb-10 font-poppins text-center">
        Explore the latest additions to our collection.
      </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-6">
          {products.length > 0 ? (
            products.slice(0, 4).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};
