import React from 'react'

const CardOne = () => {
    return (
        <>
            <h1 className='text-center pb-3 md:pb-1 text-[18px] md:text-[20px] font-[500]'>Leaves</h1>
            <h1 className='text-center pb-5 text-[26px] md:text-[32px] font-[500] text-[#5f66e1]'>0<span className='text-[12px] pl-1'>days</span></h1>
            <div className='flex justify-between w-[75%] mx-auto md:pt-3'>
                <div>
                    <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0/6</h1>
                    <h1 className='text-[11px] md:text-[13px] text-[#535353]'>Sick</h1>
                </div>
                <div>
                    <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0/6</h1>
                    <h1 className='text-[11px] md:text-[13px] text-[#535353]'>Casual</h1>
                </div>
                <div>
                    <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0/6</h1>
                    <h1 className='text-[11px] md:text-[13px] text-[#535353]'>Paid</h1>
                </div>
            </div>
        </>
    )
}

export default CardOne