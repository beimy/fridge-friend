import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/beimy"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;