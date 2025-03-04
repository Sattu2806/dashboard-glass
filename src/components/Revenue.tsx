'use client'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { BarChart, Bar, ResponsiveContainer, XAxis, CartesianGrid, Cell, YAxis } from "recharts";


const data = [
  { name: 'January', uv: 2000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 9000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 3890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 1790, pv: 4800, amt: 2181 },
  { name: 'August', uv: 2520, pv: 3800, amt: 2500 },
];

const Revenue = () => {
  return (
    <div className='glass-4 h-[300px] p-4 pb-6 max-xl:pb-10 w-full mt-5'>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='font-semibold text-sm'>Weekly Revenue</h1>
        <div className='flex items-center space-x-2'>
          <div className="flex items-center space-x-2 border-[1px] border-neutral-500 rounded-full p-1 px-3 bg-neutral-600 max-sm:hidden">
            <IoSearchSharp size={18} strokeWidth={2} />
            <input type="text" className="w-[200px] h-[30px] focus:ring-0 focus:border-0 focus:outline-0 placeholder:text-sm" placeholder="The groove at Greenfield" />
          </div>
          <p className="p-2 px-4 bg-orange-600 rounded-full flex items-center space-x-1 text-sm">
            <FaPlus />
            <span>Add Property</span>
          </p>
        </div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <Bar dataKey="uv" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === 'March' ? "orange" : "gray"}
              />
            ))}
          </Bar>
          <XAxis dataKey="name" axisLine={false} stroke="#bbb" tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} stroke="#bbb" tick={{ fontSize: 12 }} />
          <CartesianGrid vertical={false} opacity={0.3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Revenue
