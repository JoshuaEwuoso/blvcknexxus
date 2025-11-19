import React from 'react';
import '../styles/Footer4FrontTV.css';

const Footer4FrontTV = () => {
	return (
		<footer className='fronttv-footer'>
			<div className='footer-section'>
				<h2 className='fronttv-footer-title'>4FrontTV</h2>
				<p className='fronttv-footer-tagline'>
					Where curiosity meets conversation.
				</p>
			</div>

			<div className='fronttv-footer-links'>
				<a href='#hero'>Home</a>
				<a href='#podcast'>Episodes</a>
				<a href='#newsletter'>Newsletter</a>
				<a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
					YouTube
				</a>
			</div>

			<p className='fronttv-footer-copy'>
				© {new Date().getFullYear()} 4FrontTV — All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer4FrontTV;
