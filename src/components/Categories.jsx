import React, { useEffect , useState, usestate } from 'react'
import { useAppContext } from '../context/AppContext'
import { categories } from '../assets/assets'
export const Categories = () => {

// const [categories , setcategories] = useState([])
console.log(categories,">>>>>");

const list = [{
    name:"fruits",
    path:"fruits"

},
{
    name:"vegatable",
    path:"vegatable"

},
{
    name:"dairy product",
    path:"dairy"
},
{
    name:"instand food",
    path:"instand"
},
{
    name:"instand food",
     path:"instand"
},
{
    name:"orange",
     path:"instand"
},
{
    name:"orange",
     path:"instand"
}]

const { navigate } =  useAppContext()

useEffect ( () =>{
//  setcategories(list);
 
}
, []
);



  return (
   <>
   <div className='mt-16'>
  <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">
        New Arrivals
      </h1>
      <p className="text-slate-600 mb-10 font-poppins text-center">
        Explore the latest additions to our collection.
      </p>

      <section className="flex flex-wrap items-center justify-center gap-6 font-poppins">
        {[
          {
            img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop',
            name: 'White crew-Neck T-Shirt',
            price: '$29.00',
          },
          {
            img: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop',
            name: 'White crew-Neck T-Shirt',
            price: '$39.00',
          },
          {
            img: 'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop',
            name: 'White crew-Neck T-Shirt',
            price: '$29.00',
          },
          {
            img: 'https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop',
            name: 'White crew-Neck T-Shirt',
            price: '$49.00',
          },
        ].map((item, index) => (
          <a key={index} href="#" className="group w-56">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg w-full h-72 object-cover object-center group-hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            />
            <p className="text-sm mt-2">{item.name}</p>
            <p className="text-xl">{item.price}</p>
          </a>
        ))}
      </section>
   </div>
    
    </>
  )
}





 