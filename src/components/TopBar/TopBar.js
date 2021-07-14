import React from "react";
import MediaQuery from "react-responsive";

const TopBar = ({ view }) => {
	return (
		<MediaQuery minWidth={960}>
			<div className="top-bar-brand"></div>
		</MediaQuery>
	);
};

export default TopBar;
