import React from 'react';
export default Header;

function Header(props) {
    return <header class="vertical-center">
		<div>
			<h1><a href="{props.link}">{props.header}</a></h1>
			{ props.subheader ? <h2>{props.subheader}</h2> : "" }
		</div>
	</header>
}
