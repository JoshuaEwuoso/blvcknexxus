import React from 'react';
import '../styles/FooterBNX.css';

const FooterBNX = () => {
	return (
		<footer className='bnx-footer'>
			<div className='bnx-footer-container'>
				{/* CONTACT INFO */}
				<div className='bnx-footer-contact'>
					<h3 className='bnx-footer-title'>Got a question?</h3>

					<p className='bnx-footer-lines'>
						<span>Email: contact@blvcknexxus.com</span>
						<span> USA Based • Worldwide Reach</span>
						<span> Call: +1 (858) 058-9558</span>
					</p>
				</div>

				<hr className='bnx-divider' />

				{/* SOCIAL MEDIA */}
				<div className='bnx-social-media'>
					<a href='https://facebook.com' target='_blank' rel='noreferrer'>
						<img src='/fblogo.png' alt='Facebook' />
					</a>

					<a href='https://twitter.com' target='_blank' rel='noreferrer'>
						<img src='/xlogo.png' alt='Twitter' />
					</a>

					<a href='https://instagram.com' target='_blank' rel='noreferrer'>
						<img src='/instalogo.png' alt='Instagram' />
					</a>
				</div>

				<hr className='bnx-divider' />

				{/* COPYRIGHT */}
				<p className='bnx-footer-copy'>
					© {new Date().getFullYear()} BlvckNexxus • Created by{' '}
					<a href='/About' className='bnx-creator'>
						GhostPen
					</a>
				</p>
			</div>
		</footer>
	);
};

export default FooterBNX;
