import { useEffect, useState } from "react";
import { projectAuth } from "../components/firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();

	const logout = async () => {
		setError(null);
		setIsLoading(true);
		try {
			//Sign the User Out
			await projectAuth.signOut();

			//dispatching the Log out action
			dispatch({ type: "LOGOUT", payload: null });
			if (!isCancelled) {
				setError(null);
				setIsLoading(false);
			}
		} catch (err) {
			if (!isCancelled) {
				console.log(err.message);
				setError(err.message);
				setIsLoading(false);
			}
		}
	};
	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { error, isLoading, logout };
};
