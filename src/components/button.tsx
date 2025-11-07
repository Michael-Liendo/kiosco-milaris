export default function Button({ children }: { children: React.ReactNode }) {
	return (
		<button
			className="bg-golden-orange transition-all hover:scale-105 hover:bg-sand-beige text-navy-blue font-bold py-2 px-4 rounded shadow-md"
			type="button"
		>
			{children}
		</button>
	);
}
