import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/beimy/frige-friend"
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

			<div className="container">
        &copy;{new Date().getFullYear()} by Fridge Friends
      </div>

		</footer>
	);
}

export default Footer;