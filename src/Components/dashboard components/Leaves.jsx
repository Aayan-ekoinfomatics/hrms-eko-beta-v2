import React, { useEffect, useState } from 'react'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import hexToRGB from '../../helpers/hexToRGB';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import leaveApiData from '../../mockApi/leaveApiData';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRecoilState } from 'recoil';
import popUpToggleAtom from '../../recoil/popUpToggleAtom';
import Overlay from '../individual-components/Overlay';

const Leaves = () => {

    // const [popUpToggle, setPopUpToggle] = useState(false);

    const [popUpToggle, setPopUpToggle] = useRecoilState(popUpToggleAtom)

    useEffect(() => {
        setPopUpToggle({
            ...popUpToggle,
            attendencePopUpToggle: false,
            leavesPopUpToggle: false,
            tasklogPopUpToggle: false,
        })
    }, []);


    return (
        <>
            <div className='w-full bg-white px-2 rounded-xl shadow-md pt-2 col-start-1 col-end-4 md:col-start-2 md:col-end-3'>
                <div className='w-[95%] mx-auto py-2'>
                    <div className='w-full flex items-center justify-between pt-3'>
                        <div className=''>
                            <h1 className='text-[18px] md:text-[20px] font-[500]'>Leaves</h1>
                        </div>
                        <button className=''>
                            <AddRoundedIcon className="text-white bg-[#5f66e1] w-full rounded-md active:scale-[0.9] active:text-[#5f65e1e1] transition-all duration-100" fontSize='medium' onClick={() => {
                                setPopUpToggle({
                                    ...popUpToggle,
                                    leavesPopUpToggle: true,
                                })
                            }} />
                        </button>
                    </div>
                </div>
                <div className='w-[95%] max-h-[320px] mx-auto overflow-y-scroll pt-4 leaves-scroll'>
                    {
                        leaveApiData?.leaves?.map((data, i) => (
                            <div className='w-full border-b border-b-[#6969692c] py-3' key={i}>
                                <div className='w-full flex justify-between'>
                                    <div>
                                        <p className='text-[12px] md:text-[13px] text-[#696969b9] font-[600]'>{data?.application}</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px] md:text-[14px] p-[6px] font-[600]' style={{ color: data?.color, backgroundColor: hexToRGB(data?.color, 0.1) }}>{data?.status}</p>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className='text-[18px] font-[600]'>{data?.date}</h1>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <h1 className='text-[11px] font-[600]' style={{ color: data?.type_color }}>{data?.type}</h1>
                                    <button className='bg-[#afafaf7e] text-[#696969] rounded-[5px] mr-2'>
                                        <KeyboardArrowRightIcon fontSize='medium' />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* overlay */}
            <Overlay />
            {/* <div onClick={() => setPopUpToggle(false)} className={`fixed bg-black z-[90] inset-0 opacity-60 ${popUpToggle?.leavesPopUpToggle ? 'block' : 'hidden'}`}>

            </div> */}

            <div className={`fixed top-[20%] bottom-0 left-0 right-0 w-[90%] md:w-[70%] mx-auto h-[60vh] z-[100] bg-white justify-center items-center rounded-xl ${popUpToggle?.leavesPopUpToggle ? 'block' : 'hidden'}`}>
                <div className='w-full text-right pr-5 pt-5 text-[20px]'>
                    <button onClick={() => {
                        setPopUpToggle({
                            ...popUpToggle,
                            leavesPopUpToggle: false,
                        })
                    }}>
                        <CancelIcon fontSize='large' className='text-[#5f66e1] active:scale-[0.9] active:text-[#5f65e1e1] transition-all duration-100' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Leaves