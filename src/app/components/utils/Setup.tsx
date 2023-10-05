'use client';

//import { useVerify } from '@/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useVerify } from '@/hooks';


export default function Setup() {
	useVerify()
	return <ToastContainer />;
}