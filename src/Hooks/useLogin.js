import { useState, useEffect } from "react";
import { projectAuth } from "../components/firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();
	const login = async (email, password) => {
		setError(null);
		setIsLoading(true);
		try {
			const res = await projectAuth.signInWithEmailAndPassword(email, password);
			if (!res) {
				throw new Error("User not found");
			}
			dispatch({ type: "LOGIN", payload: res.user });
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

	return { error, isLoading, login };
};
