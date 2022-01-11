//
import { useFirestore } from "../../Hooks/useFireStore";
//styles
import styles from "./home-page.module.css";

export const TransactionList = ({ transactions }) => {
	const { delDocument, response } = useFirestore("transactions");
	console.log(response);
	return (
		<ul className={styles.transactions}>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className={styles.name}>{transaction.name}</p>
					<p className={styles.amount}>${transaction.amount}</p>
					<button
						onClick={() => {
							delDocument(transaction.id);
						}}>
						X
					</button>
				</li>
			))}
		</ul>
	);
};
