'use client';
import { useAppSelector } from "@/redux/hooks";
import { Spinner } from "@/app/components";
import {redirect} from "next/navigation"
import {toast} from	"react-toastify"

interface Props {
	children: React.ReactNode;
}
export default function RequireAuth({ children }: Props) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);

	if(!isAuthenticated && isLoading){
		toast.error("You need to login to access this page");
		redirect('/auth/login');
	}

	if (isLoading) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}
	if (!isAuthenticated) {
		toast.error("You need to login to access this page");
		redirect('/auth/login');
	}

	


	

	return <>{children}</>;
}

