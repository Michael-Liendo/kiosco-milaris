import type { MenuItem } from "../data/menu";

export const Card = ({ title, description, image, price }: MenuItem) => {
	return (
		<div className="bg-white shadow-lg rounded-lg max-w-sm mx-auto border-2 border-sand-beige hover:border-golden-orange transition-colors">
			<img
				src={`/menu/${image}`}
				alt={title}
				width={343}
				height={320}
				className="w-full object-[50%_70%] object-cover rounded-t-lg h-80"
			/>

			<div className="p-6">
				<h1 className="text-2xl font-bold mb-1 text-navy-blue">{title}</h1>
				<p className="text-dark-text" style={{ whiteSpace: "pre-wrap" }}>{description}</p>

				<div className="flex gap-2 justify-end">
					<p className="text-xl text-coral-red font-bold">
						{typeof price === "number" ? `$${price.toFixed(2)}` : price}
					</p>
				</div>
			</div>
		</div>
	);
};
