'use client'
import React from 'react'
import { IoIosMore } from 'react-icons/io'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { GoDotFill } from "react-icons/go";

const data = [
  { name: 'Group A', value: 38.6,country:'United Stated' },
  { name: 'Group B', value: 22.5,country:'Canada' },
  { name: 'Group C', value: 30.8,country:'Mexico' },
  { name: 'Group D', value: 8.1,country:'Other' },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const ActiveListing = () => {
  return (
    <div className='glass-4 h-[300px] p-4 pb-6 w-full'>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='font-semibold text-sm'>Active Listings</h1>
        <IoIosMore size={20} />
      </div>
      <div className="flex h-full">
        {/* Chart container */}
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Content next to the chart */}
        <div className="w-1/2 flex flex-col justify-between py-12">
            {data.map((entry, index) => (
                <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center space-x-1'>
                        <GoDotFill color={`${COLORS[index % COLORS.length]}`}/>
                        <p className='font-semibold text-sm'>{entry.country}</p>
                    </div>
                    <p>{entry.value}%</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ActiveListing
