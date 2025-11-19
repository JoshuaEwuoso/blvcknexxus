import React from 'react';
import '../styles/FooterTerraKulture.css';

const FooterTerraKulture = () => {
	return (
		<footer className='tk-footer'>
			<div className='tk-footer-inner'>
				<h3 className='tk-footer-title'>TerraKulture</h3>
				<p className='tk-footer-tagline'>
					Embrace your essence. Dress in excellence.
				</p>

				<div className='tk-footer-links'>
					<a href='https://instagram.com' target='_blank' rel='noreferrer'>
						Instagram
					</a>
					<a href='https://tiktok.com' target='_blank' rel='noreferrer'>
						TikTok
					</a>
					<a href='mailto:contact@terrakulture.com'>Contact</a>
				</div>

				<p className='tk-footer-copy'>
					© {new Date().getFullYear()} TerraKulture • A BlvckNexxus Brand.
				</p>
			</div>
		</footer>
	);
};

export default FooterTerraKulture;
