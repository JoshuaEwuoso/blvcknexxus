import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<section>
				<div>
					<div className='footer-info'>
						<h3>Got anything to ask?</h3>
						<span>Email us: contact@blvcknexxus.com</span>{' '}
						<span> | USA based Worldwide reach</span>{' '}
						<span> | Call us: +1 (858) 058-9558</span>
					</div>
					<hr />
				</div>
				<div className='social-media'>
					<a href='https://facebook.com' target='blank'>
						<img src='/fblogo.png' alt='Facebook' />
					</a>
					<a href='https://twitter.com' target='blank'>
						<img src='/xlogo.png' alt='Twitter' />
					</a>
					<a href='https://instagram.com' target='blank'>
						<img src='/instalogo.png' alt='Instagram' />
					</a>
				</div>
				<hr />
			</section>
			Copyright &copy; 2023 |{' '}
			<a href='https://blvcknexus.com/About'> GhostPen</a> All Rights Reserved.
		</footer>
	);
};

export default Footer;
