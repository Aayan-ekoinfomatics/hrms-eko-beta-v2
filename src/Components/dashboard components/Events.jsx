import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import eventsApiData from '../../mockApi/eventsApiData';
import hexToRGB from '../../helpers/hexToRGB';
import { monthList } from '../../helpers/calenderData';
import { useRecoilState } from 'recoil';
import popUpToggleAtom from '../../recoil/popUpToggleAtom';

const Events = () => {

    // const [ popUpToggle, setPopUpToggle ] = useState(false);

    const [popUpToggle, setPopUpToggle] = useRecoilState(popUpToggleAtom)

    useEffect(() => {
        setPopUpToggle({
            ...popUpToggle,
            attendencePopUpToggle: false,
            leavesPopUpToggle: false,
            tasklogPopUpToggle: false,
            monthListToggle: false,
        })
    }, []);


    return (
        <div className='w-full bg-white col-start-1 md:col-start-1 col-end-4 md:col-end-2  px-2 rounded-xl shadow-md py-2 '>
            <div className='w-[95%] mx-auto pt-2 relative'>
                <div className='w-full flex justify-between items-center py-4'>
                    <div className='w-full flex justify-start'>
                        <h1 className='text-[18px] md:text-[20px] font-[500]'>Events</h1>
                    </div>
                    <button className=' text-right flex justify-end items-center px-1'  onClick={() => {
                        setPopUpToggle({
                            ...popUpToggle,
                            monthListToggle: true
                        })
                    }}>
                        Month
                        <span><KeyboardArrowDownIcon fontSize='medium'/></span>
                    </button>
                </div>
                <div className={`absolute top-[70%] right-[3%] rounded-lg min-w-[130px] overflow-hidden transition-all duration-300 z-[95] bg-[#fff] shadow-2xl ${ popUpToggle?.monthListToggle ? 'border border-[#eeeded] py-2 h-[300px] overflow-y-scroll ease-in' : 'h-0 ease-out p-0' }`}>
                    {
                        monthList?.map((data, i) => (
                            <h1 key={i} className='py-2 px-4 border-b border-b-[#6969692c] text-[13px] text-[#696969d5] hover:text-black transition-all cursor-pointer'>{data?.longName}</h1>
                        ))
                    }
                </div>
            </div>

            <div className='w-[95%] mx-auto relative max-h-[320px] overflow-y-scroll events-scroll'>
                {
                    eventsApiData?.content?.map((data, index) => {
                        return (
                            <div className='w-full border-b border-b-[#6969692c]' key={index}>
                                <h1 className='text-[15px] py-2 text-[#252525] font-[600]'>{data?.event_name}</h1>
                                <div className='w-full flex justify-between py-2 text-[#525252]'>
                                    <h1 className={`text-[12px] md:text-[13px] font-[500]`}>{data?.event_date}</h1>
                                    <h1 className={`text-[12px] md:text-[14px] p-[6px] font-[600]`} style={{ color: data?.color, backgroundColor: hexToRGB(data?.color, 0.1) }} >{data?.event_type}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Events