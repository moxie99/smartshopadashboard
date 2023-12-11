import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { admin } from '../../assets/images';
const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setSatate] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const inputHandle = (e) => {
    setSatate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const togglePasswordVisibility = () => {
    setSatate((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };
  const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center',
  };
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate('/');
    }
  }, [errorMessage, successMessage]);
  return (
    <div className='min-w-screen min-h-screen bg-secondary flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-primary p-4 rounded-md'>
          <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
              <img
                className='w-full h-full object-contain rounded-full'
                src={admin}
                alt='img'
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className='px-3 py-2 outline-none border border-white bg-transparent rounded-md text-white focus:primary overflow-hidden'
                type='text'
                name='email'
                placeholder='email'
                id='email'
                required
              />
            </div>
            <div className='flex flex-col w-full gap-1 mb-5'>
              <label htmlFor='password'>Password</label>
              {/* <input onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border order-white bg-transparent rounded-md text-white focus:primary overflow-hidden' type="password" name='password' placeholder='password' id='password' required /> */}
              <div className='relative'>
                <input
                  onChange={inputHandle}
                  value={state.password}
                  className='px-3 py-2 outline-none border border-white bg-transparent rounded-md text-white focus:border-secondary overflow-hidden'
                  type={state.showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='password'
                  id='password'
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className='absolute right-3 top-2 cursor-pointer'
                >
                  {/* Use an eye icon and a closed eye icon */}
                  {state.showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                </span>
              </div>
            </div>
            <button
              disabled={loader ? true : false}
              className='bg-[#ffffff] w-full hover:shadow-blue-500/50 hover:shadow-lg text-primary rounded-md px-7 py-2 mb-3 font-bold uppercase'
            >
              {loader ? (
                <PropagateLoader color='#224807' cssOverride={overrideStyle} />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin