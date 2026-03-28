const Header: React.FC = () => {
	return (
		<header className="bg-gradient-to-br from-navy-blue via-turquoise to-golden-orange text-foam-white shadow-lg">
			<div className="flex flex-col items-center gap-3 my-3 px-4">
				<div>
					<img
						src="/image.png"
						alt="Playa la Rompe"
						className="h-44 rounded-full shadow-xl border-4 border-white/90 ring-2 ring-golden-orange/80"
					/>
				</div>
				<div className="text-center space-y-1">
					<p className="text-base sm:text-lg font-semibold text-white/95 drop-shadow">
						Sabores frescos junto al mar
					</p>
					<p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/85">
						Naiguatá — La Guaira
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
