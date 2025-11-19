import React from 'react';
import FooterAeonByte from '../components/FooterAeonByte';
import '../styles/AeonByte.css';

const AeonByte = () => {
	return (
		<div className='aeonbyte-page'>
			{/* HERO SECTION */}
			<section className='aeon-hero'>
				<img
					src='/AeonByte.png'
					alt='AeonByte Logo'
					className='aeon-hero-logo'
				/>

				<h1 className='aeon-hero-title'>Code The Future.</h1>

				<p className='aeon-hero-sub'>
					Welcome to AeonByte — where your coding journey begins, curiosity
					thrives, and ambition becomes skill.
				</p>

				<button className='aeon-hero-btn'>Start Learning</button>
			</section>

			{/* FEATURE CARDS SECTION */}
			<section className='aeon-features'>
				<div className='aeon-feature-card'>
					<h3>🚀 Learn Real Skills</h3>
					<p>Hands-on lessons and challenges designed to level you up fast.</p>
				</div>

				<div className='aeon-feature-card'>
					<h3>🧠 Mentorship</h3>
					<p>Guidance for beginners entering the tech world with confidence.</p>
				</div>

				<div className='aeon-feature-card'>
					<h3>🔧 Build & Ship</h3>
					<p>Work on real projects that help you grow and build a portfolio.</p>
				</div>

				<div className='aeon-feature-card'>
					<h3>🌐 Community</h3>
					<p>Connect with other learners, creators, and developers.</p>
				</div>
			</section>

			{/* MISSION / WHY AEONBYTE */}
			<section className='aeon-mission'>
				<h2>Why AeonByte Exists</h2>
				<p>
					AeonByte was created to open doors for new developers — especially
					those who felt overlooked, underestimated, or unsure where to start.
					We believe in giving people real skills, real opportunities, and a
					real chance to grow.
				</p>
			</section>

			{/* CALL TO ACTION */}
			<section className='aeon-cta'>
				<h2>Ready to Start Your Journey?</h2>
				<button className='aeon-cta-btn'>Begin Learning</button>
			</section>

			<FooterAeonByte />
		</div>
	);
};

export default AeonByte;
