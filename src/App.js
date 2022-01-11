//Pages
import HomePage from "./Pages/HomePage/homePage";
import SignIn from "./Pages/Sign-in Page/signIn";
import SignUp from "./Pages/Sign-up Page/signUp";
import { useAuthContext } from "./Hooks/useAuthContext";
// import { useNavigate } from "react-router-dom";
//React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import React from "react";
// import { authReducer } from "./context/AuthContext";
function App() {
	const { authIsReady, user } = useAuthContext();

	console.log(authIsReady, user);
	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route
							path="/"
							element={
								user ? <HomePage /> : <Navigate to={"/signin"} />
							}
						/>
						<Route
							path="/signin"
							element={user ? <Navigate to={"/"} /> : <SignIn />}
						/>
						<Route
							path="/signup"
							element={user ? <Navigate to={"/"} /> : <SignUp />}
						/>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
