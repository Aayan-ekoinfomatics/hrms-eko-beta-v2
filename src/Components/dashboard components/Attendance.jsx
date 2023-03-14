import React, { useEffect, useState } from 'react'
import attendanceApiData from '../../mockApi/attendanceApiData'
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import popUpToggleAtom from '../../recoil/popUpToggleAtom';
import { useRecoilState } from 'recoil';
import Overlay from '../individual-components/Overlay';

const Attendance = () => {

    // const [ popUpToggle, setPopUpToggle ] = useState(false);

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
            {/* desktop view */}
            <div className='w-full hidden sm:block bg-white px-2 rounded-xl shadow-md py-2 col-start-1 col-end-4 md:col-start-3 md:col-end-5'>
                <div className='w-[95%] mx-auto pt-5 pb-2 flex justify-between'>
                    <h1 className='text-[18px] md:text-[20px] font-[500]'>Attendance</h1>
                    <div>
                        <EditIcon fontSize='medium' className="text-[#5f66e1] w-[25px] cursor-pointer active:scale-[0.9] active:text-[#5f65e1e1] transition-all duration-100" onClick={() => {
                            setPopUpToggle({
                                ...popUpToggle,
                                attendencePopUpToggle: true,
                            })
                        }} />
                    </div>
                </div>
                <div className='w-[95%] mx-auto flex justify-between pt-4 pr-4 items-center'>
                    {
                        attendanceApiData?.header?.map((data, i) => (
                            <h1 className='text-[12px] md:text-[14px] w-full font-[600]' key={i}>{data?.label}</h1>
                        ))
                    }
                </div>
                <div className='w-[95%] mx-auto pt-4  max-h-[320px] overflow-y-scroll attendance-scroll'>
                    <div className='w-full '>
                        {
                            attendanceApiData?.content?.map((data, i) => (
                                <div className='flex justify-between py-5 border-b border-b-[#6969692c]' key={i}>
                                    <h1 className='text-[11px] font-[500] text-[#525252] md:text-[14px] w-full' >{data?.date}</h1>
                                    <h1 className='text-[11px] font-[500] text-[#525252] md:text-[14px] w-full' >{data?.check_in}</h1>
                                    <h1 className='text-[11px] font-[500] text-[#525252] md:text-[14px] w-full' >{data?.check_out}</h1>
                                    <h1 className='text-[11px] font-[500] text-[#525252] md:text-[14px] w-full' >{data?.duration}</h1>
                                    <h1 className='text-[11px] font-[500] text-[#525252] md:text-[14px] w-full' >{data?.status}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className='w-full block sm:hidden bg-white px-2 rounded-xl shadow-md py-2 col-start-1 col-end-4 md:col-start-3 md:col-end-5'>
                <div className='w-[90%] mx-auto py-2 flex justify-between'>
                    <h1 className='text-[18px] md:text-[20px] font-[500]'>Attendance</h1>
                    <div>
                        <EditIcon fontSize='small' className="text-[#5f66e1] mr-2 w-[20px] cursor-pointer active:scale-[0.9] active:text-[#5f65e1e1] transition-all duration-100" onClick={() => {
                            setPopUpToggle({
                                ...popUpToggle,
                                attendencePopUpToggle: true,
                            })
                        }} />
                    </div>
                </div>


                <div className='w-[90%] mx-auto max-h-[320px] overflow-y-scroll'>
                    {
                        attendanceApiData?.content?.map((data, i) => (
                            <div className='w-full border-2 border-[#5f65e1d0] bg-[#5f65e111] my-8 gap-3 py-3 flex flex-col justify-center items-start px-2 rounded-[6px]' key={i}>
                                <div className='w-full flex justify-center items-start gap-3'>
                                    <h1 className='w-full  text-right text-[#333333] text-[14px]' >{attendanceApiData?.header_obj?.date}</h1>
                                    <span className='text-[#333333]' >-</span>
                                    <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.date}</h1>
                                </div>
                                <div className='w-full flex justify-center items-start gap-3'>
                                    <h1 className='w-full  text-right text-[#333333] text-[14px]' >{attendanceApiData?.header_obj?.check_in}</h1>
                                    <span className='text-[#333333]' >-</span>
                                    <div className='w-full max-h-[100px] overflow-y-scroll'>
                                        <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                        {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_in}</h1> */}
                                    </div>
                                </div>
                                <div className='w-full flex justify-center items-start gap-3'>
                                    <h1 className='w-full text-right text-[#333333] text-[14px]' >{attendanceApiData?.header_obj?.check_out}</h1>
                                    <span className='text-[#333333]' >-</span>
                                    <div className='w-full max-h-[100px] overflow-y-scroll'>
                                        <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                        {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.check_out}</h1> */}
                                    </div>
                                </div>
                                <div className='w-full flex justify-center items-start gap-3   '>
                                    <h1 className='w-full  text-right text-[#333333] text-[14px]' >{attendanceApiData?.header_obj?.duration}</h1>
                                    <span className='text-[#333333]' >-</span>
                                    <div className='w-full max-h-[100px] overflow-y-scroll'>
                                        <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                        {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.duration}</h1> */}
                                    </div>
                                </div>
                                <div className='w-full flex justify-center items-start gap-3   '>
                                    <h1 className='w-full  text-right text-[#333333] text-[14px]' >{attendanceApiData?.header_obj?.status}</h1>
                                    <span className='text-[#333333]' >-</span>
                                    <div className='w-full max-h-[100px] overflow-y-scroll'>
                                        <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                        {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.status}</h1> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* overlay */}
            <Overlay />
            {/* <div onClick={() => {
                setPopUpToggle({
                    ...popUpToggle,
                    attendencePopUpToggle: false,
                })
            }} className={`fixed bg-black z-[90] inset-0 opacity-60 ${popUpToggle?.attendencePopUpToggle ? 'block' : 'hidden'}`}></div> */}

            {/* popup */}
            <div className={`fixed top-[20%] bottom-0 left-0 right-0 w-[90%] md:w-[70%] mx-auto h-[60vh] z-[100] bg-white justify-center items-center rounded-xl ${popUpToggle?.attendencePopUpToggle ? 'block' : 'hidden'}`}>
                <div className='w-full text-right pr-5 pt-5 text-[20px]'>
                    <button onClick={() => {
                        setPopUpToggle({
                            ...popUpToggle,
                            attendencePopUpToggle: false,
                        })
                    }}>
                        <CancelIcon fontSize='large' className='text-[#5f66e1] active:scale-[0.9] active:text-[#5f65e1e1] transition-all duration-100' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Attendance