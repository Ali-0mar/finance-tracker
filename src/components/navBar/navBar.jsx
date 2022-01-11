//Hooks and components
import { Link } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";

//Style
import styles from "./nav-bar.module.css";

export const NavBar = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.title}>
					<Link to={"/"}>My Money</Link>
				</li>
				{user ? (
					<>
						<li> Welcome {user.displayName}</li>
						<li>
							<button className="btn" onClick={logout}>
								log Out
							</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/signin">Sign In</Link>{" "}
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};
