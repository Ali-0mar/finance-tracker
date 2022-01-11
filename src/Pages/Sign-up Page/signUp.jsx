//Hooks and components
import { useEffect, useState } from "react";
import { useSignup } from "../../Hooks/useSignup";
//Styles
import styles from "./sign-up.module.css";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const { error, isLoading, signUp } = useSignup();
	const handleSubmit = (e) => {
		e.preventDefault();
		signUp(email, password, displayName);
	};
	useEffect(() => {
		if (!isLoading) {
			setEmail("");
			setPassword("");
			setDisplayName("");
		}
	}, [isLoading]);
	return (
		<form className={styles["signup-form"]} onSubmit={handleSubmit}>
			<h2>Sign Up</h2>
			<label>
				<span>Choose a Display Name</span>
				<input
					autoFocus
					type="string"
					required
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
				/>
			</label>
			<label>
				<span>Enter your Email</span>
				<input
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label>
				<span>Choose a Passowrd</span>
				<input
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			{console.log(isLoading)}
			{isLoading === false ? (
				<button className="btn">Sign Up</button>
			) : (
				<button className="btn" disabled>
					Loading
				</button>
			)}

			{error && <p>{error}</p>}
		</form>
	);
};

export default SignUp;
