//Hooks and Components
import TransactionForm from "./transactionForm";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCollection } from "../../Hooks/useCollection";
import { TransactionList } from "./transactionList";

//Styles
import styles from "./home-page.module.css";

const HomePage = () => {
	const { user } = useAuthContext();
	const { documents, error } = useCollection(
		"transactions",
		["uid", "==", user.uid],
		["createdAt", "desc"]
	);
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{error && <p>{error}</p>}
				{documents && <TransactionList transactions={documents} />}
			</div>
			<div className={styles.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
};

export default HomePage;
