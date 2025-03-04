import Image from 'next/image'
import React from 'react'
import { AiOutlineRise } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'


const propertyData = [
  {
    id: 1,
    name: "Cartwood State",
    image: "/property1.jpg",
    percentage: "+11.01%",
    price: "$200,000",
    extra: "$3880"
  },
  {
    id: 2,
    name: "Greenfield Villa",
    image: "/property2.jpg",
    percentage: "-5.25%",
    price: "$320,000",
    extra: "$4500"
  },
  {
    id: 3,
    name: "Lakeside Manor",
    image: "/property3.jpg",
    percentage: "+8.50%",
    price: "$275,000",
    extra: "$3900"
  },
  {
    id: 4,
    name: "Downtown Loft",
    image: "/property4.jpg",
    percentage: "+3.20%",
    price: "$180,000",
    extra: "$3200"
  },
  {
    id: 5,
    name: "Suburban Cottage",
    image: "/property5.jpg",
    percentage: "+12.00%",
    price: "$240,000",
    extra: "$4100"
  }
];

const Properties = () => {
  return (
    <div className='glass-4 w-full h-auto p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold'>My Properties</h1>
        <p className="p-2 px-4 bg-orange-600 rounded-full flex items-center space-x-1 text-sm">
          <FaPlus />
          <span>Add Property</span>
        </p>
      </div>
      <div className='space-y-2 mt-4'>
        {propertyData.map((property) => (
          <div 
            key={property.id} 
            className='border-b-[0.5px] border-neutral-400 py-2 flex items-center justify-between'
          >
            <div className='flex items-center space-x-2'>
              <Image 
                src={property.image} 
                width={100} 
                height={100} 
                alt={`prop-${property.id}`} 
                className='w-10 h-10 rounded-md'
              />
              <div>
                <p className='text-sm'>{property.name}</p>
                <div className='text-[10px] font-medium bg-green-700/80 rounded-full p-1 flex items-center space-x-0.5 max-w-16'>
                  <span className='opacity-70'>{property.percentage}</span>
                  <AiOutlineRise className='opacity-60' size={12} />
                </div>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-neutral-200 text-sm font-medium'>{property.price}</p>
              <p className='text-xs text-neutral-400'>{property.extra}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Properties
