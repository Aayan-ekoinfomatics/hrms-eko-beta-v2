import React, { useEffect, useState } from 'react'
import userDashboardData from '../../mockApi/userDashboardApi'
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import Calendar from 'react-calendar';
import TaskLog from '../dashboard components/TaskLog';
import Events from '../dashboard components/Events';
import Leaves from '../dashboard components/Leaves';
import Attendance from '../dashboard components/Attendance';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
// import 'react-calendar/dist/Calendar.css';

const MainDasboard = () => {

    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);



    return (
        <div className='bg-[#E5E5F8] py-10'>
            <motion.div
                animate={{ y: [-15, 0, 0], opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                transition={{ x: { duration: 1.5 }, default: { ease: "linear" }, delay: 0 }}
                className='w-[90%] mx-auto flex justify-between'>
                <div className='flex flex-col justify-start items-start pl-1'>
                    <h1 className='poppins text-[18px] md:text-[23px] tracking-tight leading-3 md:leading-4 font-[600]'>Hello <span className='text-[#5f66e1]'>{userDashboardData?.user_data?.user_name}</span></h1>
                    <p className='text-[#575757] font-[500] text-[14px] md:text-[18px]'>{userDashboardData?.user_data?.user_position}</p>
                </div>
                <div className='flex justify-between gap-2 md:gap-5 items-start'>
                    <h1 className='poppins text-[14px] md:text-[18px] tracking-tight font-[600] text-[#5f66e1]'>{date.toLocaleTimeString()}</h1>
                    <button className='' onClick={() => {
                        localStorage.clear()
                        navigate('/login')
                    }}>
                        <PowerSettingsNewRoundedIcon
                            className="text-[#5f66e1] rotate-90 active:scale-[0.9] active:text-[#5f65e1e1] transition-all duration-100"
                            fontSize="medium"
                        />
                    </button>
                </div>
            </motion.div>
            <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-5'>
                <motion.div
                    animate={{ y: [-15, 0, 0], opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                    transition={{ x: { duration: 1.5 }, default: { ease: "linear" }, delay: 0.2 }}
                    className=' w-full max-w-[700px] flex flex-col justify-center bg-white rounded-xl shadow-md py-4 md:py-6'>
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
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 0, 0], opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                    transition={{ x: { duration: 1.5 }, default: { ease: "linear" }, delay: 0.4 }}
                    className=' w-full max-w-[700px] flex flex-col justify-center bg-white rounded-xl shadow-md py-4 md:py-6'>
                    <h1 className='text-center pb-3 md:pb-1 text-[18px] md:text-[20px] font-[500]'>On Desk</h1>
                    <h1 className='text-center pb-5 text-[26px] md:text-[32px] font-[500] text-[#5f66e1]'>1<span className='text-[12px] pl-1'>days</span></h1>
                    <div className='flex justify-between w-[55%] mx-auto md:pt-3'>
                        <div>
                            <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0 days</h1>
                            <h1 className='text-[11px] md:text-[13px] text-[#535353] text-center'>WFO</h1>
                        </div>
                        <div>
                            <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0 days</h1>
                            <h1 className='text-[11px] md:text-[13px] text-[#535353] text-center'>WFH</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 0, 0], opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                    transition={{ x: { duration: 1.5 }, default: { ease: "linear" }, delay: 0.6 }}
                    className=' w-full max-w-[700px] flex flex-col justify-center bg-white rounded-xl shadow-md py-4 md:py-6'>
                    <h1 className='text-center pb-3 md:pb-1 text-[18px] md:text-[20px] font-[500]'>Overtime</h1>
                    <h1 className='text-center pb-5 text-[26px] md:text-[32px] font-[500] text-[#5f66e1]'>0<span className='text-[12px] pl-1'>hours</span></h1>
                    <div className='flex justify-between w-[55%] mx-auto md:pt-3'>
                        <div>
                            <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0 hours</h1>
                            <h1 className='text-[11px] md:text-[13px] text-[#535353] text-center'>WFO</h1>
                        </div>
                        <div>
                            <h1 className='text-center text-[13px] md:text-[15px] font-[600] text-[#535353]'>0 hours</h1>
                            <h1 className='text-[11px] md:text-[13px] text-[#535353] text-center'>WFH</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 0, 0], opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                    transition={{ x: { duration: 1.5 }, default: { ease: "linear" }, delay: 0.8 }}
                    className=' w-full max-w-[700px] flex flex-col justify-between bg-white rounded-xl shadow-md py-4 md:py-6'>
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
                </motion.div>
            </div>

            <motion.div
                layout
                animate={{ y: [-15, 0, 0], opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}
                transition={{ x: { duration: 1.5 }, default: { ease: "linear" }, delay: 1 }}
                className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5'>

                {/* grid item 1 - task log */}
                <TaskLog />

                {/* grid item 2 - calender */}
                <div className='w-full bg-white border-4 border-[#5f65e19f] md:row-start-1 md:row-end-3 col-start-1 md:col-start-4 col-end-4 md:col-end-5 px-2 rounded-xl py-2 max-h-[370px]'>
                    <Calendar
                        minDetail='year'
                        next2Label={false}
                        prev2Label={false}
                    />
                </div>

                {/* grid item 3 - events */}
                <Events />

                {/* grid item 4 - leaves */}
                <Leaves />

                {/* grid item 5 - attendance */}
                <Attendance />
                
            </motion.div>

        </div>
    )
}

export default MainDasboard