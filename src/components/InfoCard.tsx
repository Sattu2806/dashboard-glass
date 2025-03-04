import Image from 'next/image'
import React from 'react'
import { AiOutlineRise } from 'react-icons/ai';
import { FaStar } from "react-icons/fa";


const InfoCard = () => {
  return (
    <div className='glass-4 w-full h-auto p-4'>
        <div className='flex items-center space-x-2'>
            <Image src='/user.jpg' width={100} height={100} alt='user-image' className='w-10 h-10 rounded-full'/>
            <div className='text-sm'>
                <p className='font-semibold'>Cormelius Greenfilder</p>
                <p className='flex items-center space-x-1'>
                    <FaStar color='yellow'/>
                    <span className='font-semibold'>4.2</span>
                    <span className='text-neutral-400'>(121 review)</span>
                </p>
            </div>
        </div>
        <div className='pt-3 space-y-2'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-neutral-400'>Phone</p>
                <p className='text-sm text-neutral-200'>0269223994237</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-neutral-400'>Location</p>
                <p className='text-sm text-neutral-200'>United States, New York</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-neutral-400'>Joined Paltform</p>
                <p className='text-sm text-neutral-200'>2 Dec, 2021</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-neutral-400'>Total Investment</p>
                <div className='text-sm text-neutral-200 flex items-center space-x-1'>
                    <span>$1,242,341</span>
                    <div className='text-[10px] font-medium bg-green-600 rounded-full p-1 flex items-center space-x-0.5'>
                    <span className='opacity-90'>+11.01%</span>
                        <AiOutlineRise className='opacity-60' size={12} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard