import React, { useEffect, useRef, useState } from 'react'
import img from '../../assets/icons/eko_logo.svg'
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import login_bg from '../../assets/icons/login-waves.svg'
import axios from 'axios';
import { base_link } from '../../helpers/baseLink';
import { useRecoilState } from 'recoil';
import LoginApiAtom from '../../recoil/LoginApiAtom';

const LoginPage = () => {

    const [loginData, setLoginData] = useRecoilState(LoginApiAtom);

    const [showPassword, setShowPassword] = useState(false);

    const [errorText, setErrorText] = useState(null);

    const navigate = useNavigate()

    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const loginFunctionality = (e) => {
        e.preventDefault()

        const userCredentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        if (emailRef?.current?.value?.length === 0 || passwordRef?.current?.value?.length === 0) {
            setErrorText('Please fill all fields')
        } else if (emailRef?.current?.value?.length > 5 && passwordRef?.current?.value?.length >= 8) {

            axios({
                method: "post",
                url: base_link + "login",
                data: userCredentials,
            }).then(function (response) {
                // setLoginData(response?.data)
                localStorage.setItem("status", response?.data?.status);
                localStorage.setItem("user_type", response?.data?.data?.user_type);
                localStorage.setItem("token", response?.data?.data?.token);
                localStorage.setItem("full_name", response?.data?.data?.full_name);
                localStorage.setItem("designation", response?.data?.data?.designation);
                if (localStorage.getItem("status") === 'true') {
                    navigate("/");
                } else {
                    setErrorText("Wrong Password")
                }
            }).catch(function (error) {
                console.log(error);
            });
        }

    }

    // useEffect(() => {
    //   console.log(loginData?.data)
    // }, [loginData])



    return (
        <div className="w-full flex justify-center items-center h-screen bg-gradient-to-tr from-[#E5E5F8] to-[#B8BCFF]">
            <div className='w-full fixed inset-0 h-screen'>
                <img src={login_bg} className=" w-full object-cover h-full" />
            </div>
            <motion.form animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 1.3 }, default: { ease: "linear" }, delay: 0 }} className='z-[100] bg-white rounded-md px-3 min-w-[300px] shadow-lg' onSubmit={loginFunctionality}>
                <div className='w-full flex justify-center py-3 my-3'>
                    <img src={img} className='w-[90px]' />
                </div>
                <div className='my-3'>
                    <input onKeyDown={(event) => {
                        const { key } = event;
                        if ((key === "Enter" && emailRef?.current?.value?.length === 0)) {
                            setErrorText('Email Required')
                        }
                        else if (key === "Enter" && emailRef?.current?.value?.length !== 0) {
                            setErrorText('')
                            passwordRef.current.focus();
                        }
                    }
                    } autoFocus type="email" className='w-full border border-[#69696946] rounded-md pl-2 py-[10px] text-[13px] focus:outline-[#5f66e1]' placeholder='Email' ref={emailRef} />
                    <p className='text-red-400 text-[10px] pl-1 pt-1 hidden'>Some error occured</p>
                </div>
                <div className=' my-3'>
                    <div className='flex items-center rounded-md border border-[#69696946]'>
                        <input onKeyDown={(event) => {
                            const { key } = event;
                            if ((key === "Enter" && passwordRef?.current?.value?.length === 0)) {
                                setErrorText('Password Required')
                            }
                            else if (key === "Enter" && passwordRef?.current?.value?.length < 8) {
                                setErrorText('Password too short')
                                //   passwordRef.current.focus();
                            } else if (key === "Enter" && passwordRef?.current?.value?.length > 8) {
                                setErrorText('')
                                //   passwordRef.current.focus();
                            }
                        }
                        } type={showPassword ? 'text' : 'password'} className='w-full rounded-md pl-2 py-[10px] text-[13px] focus:outline-[#5f66e1]' placeholder='Password' ref={passwordRef} />
                        <div className='px-1 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ?
                                    <VisibilityRoundedIcon fontSize="small"
                                        className="text-[#5f66e1]" />
                                    :
                                    <VisibilityOffRoundedIcon fontSize="small"
                                        className="text-[#b8bcff]" />
                            }
                        </div>
                    </div>

                    {
                        errorText &&
                        <p className='text-red-500 text-[10px] pl-1 pt-1'>{errorText}</p>
                    }
                </div>
                <button className='text-center w-full py-2 mb-3 mt-3 rounded-md text-white bg-[#5f66e1] active:scale-[0.98] active:bg-[#5f65e1e1] transition-all duration-100'>
                    Login
                </button>
            </motion.form>
        </div>
    )
}

export default LoginPage