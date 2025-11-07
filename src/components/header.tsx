import Logo from "../assets/logo.png";

const Header: React.FC = () => {
	return (
		<header className="bg-gradient-to-br from-navy-blue via-turquoise to-light-turquoise text-foam-white shadow-lg">
			<div className="flex flex-col items-center gap-4 my-3">
				<div>
					<img
						src={Logo}
						alt="Logo"
						className="h-44 rounded-full shadow-xl border-4 border-golden-orange"
					/>
				</div>
				<div>
					<h1 className="text-2xl font-extrabold text-white drop-shadow-md">
						Sabores frescos junto al mar
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
