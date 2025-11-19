import React from 'react';
import FooterAeonByte from '../components/FooterAeonByte';
import '../styles/AeonByte.css';

const AeonByte = () => {
	return (
		<div className='aeonbyte-page'>
			<main className='aeonbyte-main'>
				<h1>Welcome to AeonByte</h1>

				<p>
					You made it — welcome to the beginning of your coding journey.
					<br />
					Here, bold ideas and bright minds come together.
				</p>

				<p>
					Whether you're a self-taught developer, a new graduate, or just
					someone looking to challenge yourself — this is where your growth
					starts.
				</p>

				<p>At AeonByte, being a nerd isn’t just accepted — it’s celebrated.</p>
			</main>

			<FooterAeonByte />
		</div>
	);
};

export default AeonByte;
