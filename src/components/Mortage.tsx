'use client'
import React from 'react';
import { IoIosMore } from "react-icons/io";
import { BarChart, Bar, ResponsiveContainer, XAxis, CartesianGrid, Cell, YAxis } from "recharts";

const data = [
  { name: 'January', uv: 2000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 5000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 3890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
];

const Mortage = () => {
  function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 85%)`;
  }

  const randomColor = getRandomColor();

  return (
    <div className='glass-4 h-[300px] p-4 pb-6 w-full'>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='font-semibold text-sm'>Mortages</h1>
        <IoIosMore size={20} />
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <defs>
            <linearGradient id='colorUv' x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor={randomColor} stopOpacity={0.6} />
              <stop offset="100%" stopColor="#111" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#111" stopOpacity={0} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
              <feFlood floodColor="#ffffff" floodOpacity={0.75} result="color" />
              <feComposite in="color" in2="offsetBlur" operator="in" result="glowColor" />
              <feComposite in="SourceGraphic" in2="glowColor" operator="over" />
            </filter>
          </defs>
          <Bar dataKey="uv" radius={[10,10,0,0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                // Change the condition below to color the desired bar green.
                fill={entry.name === 'March' ? "teal" : "url(#colorUv)"}
              />
            ))}
          </Bar>
          <XAxis dataKey="name" axisLine={false} stroke="#bbb" tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} stroke="#bbb" tick={{ fontSize: 12 }} />
          <CartesianGrid vertical={false} opacity={0.3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Mortage;
