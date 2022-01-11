//Hooks and Components
import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";

//Styles
import styles from "./sign-in.module.css";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassowrd] = useState("");
	const { error, isLoading, login } = useLogin();
	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
		setEmail("");
		setPassowrd("");
	};

	return (
		<form onSubmit={handleSubmit} className={styles["login-form"]}>
			<h2>Sign In</h2>
			<label>
				<span>E-Mail</span>
				<input
					autoFocus
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label>
				<span>Password</span>

				<input
					type="password"
					required
					value={password}
					onChange={(e) => setPassowrd(e.target.value)}
				/>
			</label>
			{isLoading ? (
				<button className="btn" disabled>
					Loging in
				</button>
			) : (
				<button className="btn">Log In</button>
			)}

			{error && <p>{error}</p>}
		</form>
	);
};

export default SignIn;
