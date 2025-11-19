const FooterAeonByte = () => {
	return (
		<footer className='aeon-footer'>
			<p className='footer-title'>AEONBYTE</p>
			<p className='footer-tagline'>Code the Future.</p>

			<div className='footer-links'>
				<a href='why'>Join AeonByte</a>
				<a href='when'>Hire Us</a>
				<a href='who'>Tech Stack</a>
				<a href='where'>Projects</a>
			</div>

			<p className='copy'>
				© {new Date().getFullYear()} AeonByte. All rights reserved.
			</p>
		</footer>
	);
};

export default FooterAeonByte;
