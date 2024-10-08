import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';

export default function LoginModal() {
  const {open,handleClose} = useContext(LoginContext)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='flex absolute top-1/4 left-[30%] text-center'>
        <div className='bg-white absolute w-[36rem] px-32 py-12 rounded-xl border border-slate-400'>
            <h1 className='text-3xl font-semibold text-slate-700 my-1'>Welcome</h1>
            <p className='text-sm text-slate-500 mb-6' >Sign in or sign up to continue</p>
            <p className='bg-gray-200 my-1 px-1 font-semibold rounded'>Continue with Google</p>
            <p className='bg-gray-200 my-1 px-1 font-semibold rounded'>Continue with Apple</p>
            <p className='bg-gray-200 px-1 font-semibold rounded'>Single sign-on (SSO)</p>
            <p className='border my-4'></p>
            <input className='border w-full text-sm p-1' placeholder='Your email' />
            <p className='text-sm my-2 text-slate-400'>Continue with email</p>
        </div>
        </div>
      </Modal>
    </div>
  );
}
