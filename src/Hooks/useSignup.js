//Hooks
import { useEffect, useState } from "react";
import { projectAuth } from "../components/firebase/config";
import { useAuthContext } from "./useAuthContext";

export function useSignup() {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();
	const signUp = async (email, password, displayName) => {
		setError(null);
		setIsLoading(true);
		try {
			//sign the User up
			const res = await projectAuth.createUserWithEmailAndPassword(email, password);
			if (!res) {
				throw new Error("Couldn't complete the signup process");
			}
			//Add th display Name
			await res.user.updateProfile({ displayName });

			dispatch({ type: "LOGIN", payload: res.user });
			//Update the state
			if (!isCancelled) {
				setIsLoading(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				console.log(err.message);
				setError(err.message);
				setIsLoading(false);
			}
		}
	};
	//Clean up Fucntion
	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { error, isLoading, signUp };
}
