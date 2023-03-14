import React from 'react'

const CardFour = () => {
    return (
        <>
            <h1 className='pb-1 w-[90%] mx-auto text-[18px] md:text-[20px] font-[500]'>December 5</h1>
            <div className='flex justify-between w-[80%] mx-auto py-1'>
                <div>
                    <h1 className='text-center'>--:--</h1>
                </div>
                <div>
                    <h1 className='text-center'>--:--</h1>
                </div>
            </div>
            <button className='w-[90%] mx-auto rounded-lg text-white p-2 bg-[#5f66e1] active:scale-[0.98] active:bg-[#5f65e1e1] transition-all duration-100'>Clock In</button>
        </>
    )
}

export default CardFour