import { Analytics } from "@vercel/analytics/react";
import { Card } from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import { menu } from "./data/menu";
import "./index.css";

function App() {
	return (
		<>
			<Analytics />
			<div className="min-h-screen flex flex-col bg-sand-beige">
				<Header />

				<main className="flex-grow container mx-auto px-4 py-8 space-y-4">
					{menu.map((item) => (
						<Card
							description={item.description}
							image={item.image}
							key={item.title}
							price={item.price}
							title={item.title}
						/>
					))}
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
