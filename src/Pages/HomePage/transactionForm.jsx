import { useState, useEffect } from "react";
import { useFirestore } from "../../Hooks/useFireStore";

const TransactionForm = ({ uid }) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const { addDocument, response } = useFirestore("transactions");

	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({
			uid,
			name,
			amount,
		});
	};
	useEffect(() => {
		if (response.success) {
			setName("");
			setAmount("");
		}
	}, [response.success]);
	return (
		<>
			<h3>Add a new Transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Enter Transaction Name</span>
					<input
						type="text"
						required
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}
					/>
				</label>
				<label>
					<span>How much did it cost?</span>
					<input
						type="number"
						required
						onChange={(e) => {
							setAmount(e.target.value);
						}}
						value={amount}
					/>
				</label>
				<button>Add</button>
			</form>
		</>
	);
};

export default TransactionForm;
