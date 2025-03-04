import React from 'react'
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai'

type Props = {
  name: string,
  value: number,
  change: number
}

const AnalyticCard = ({ name, value, change }: Props) => {
  // Set background color based on change value:
  const bgColor = change >= 0 ? 'bg-green-600/80' : 'bg-red-500/90';

  return (
    <div className='glass-4 w-full h-auto p-3'>
      <h1 className='font-semibold text-sm'>{name}</h1>
      <div className='flex items-center space-x-2 py-3'>
        <p className='text-xl font-semibold'>{value}K</p>
        <div className={`text-[10px] font-medium ${bgColor} rounded-full p-1 flex items-center space-x-0.5`}>
          <span>{change}%</span>
          {change >=0 ? (
          <AiOutlineRise className='opacity-60' size={12} />
            
          ):(
            <AiOutlineFall className='opacity-60' size={12} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AnalyticCard;
