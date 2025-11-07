import Logo from "../assets/logo.png";

const Header: React.FC = () => {
	return (
		<header className="bg-gradient-to-bl to-white from-sunset-blue text-dark-text shadow-lg">
			<div className="flex flex-col items-center  gap-4 my-3">
				<div>
					<img src={Logo} alt="Logo" className="h-44 rounded-full" />
				</div>
				<div>
					<h1 className="text-2xl font-extrabold">
						Sabores frescos junto al mar
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
