import React from 'react';
import '../styles/About.css'; // make sure this is linked
import FooterBNX from '../components/FooterBNX';

const About = () => {
	return (
		<section>
			<div className='about-container'>
				{/* Project Description Section */}
				<section className='about-section'>
					<h1 className='about-title'>Project Description</h1>

					<p className='about-text'>
						Welcome to a digital playground where fashion, tech, and podcasting
						come together to form a vibrant symphony of creativity and
						knowledge. This platform brings you bold fashion that turns heads,
						innovative technology that sparks curiosity, and compelling podcasts
						that spark conversation.
					</p>

					<p className='about-text'>
						Designed as a seamless fusion of style, innovation, and
						storytelling, this space invites you to explore the intersection
						where ideas meet inspiration. Here, fashion meets function. Bytes
						meet beauty. And conversations meet curiosity. Prepare to experience
						a virtual haven built for creators, thinkers, and dreamers alike.
					</p>
				</section>
				{/* About Josh Section */}
				<section className='about-section'>
					<h2 className='about-subtitle'>About Josh</h2>

					<p className='about-text'>
						Meet Josh — the creative force behind this digital experience. With
						a deep passion for innovation, design, and meaningful conversation,
						Josh brings a unique perspective that elevates everything this
						platform represents.
					</p>

					<p className='about-text'>
						Blending a love for fashion, a drive for technology, and the art of
						podcasting, Josh creates a seamless world where ideas thrive and
						creativity has no limits. Whether exploring new styles, building
						modern tech solutions, or sparking thoughtful discussion, Josh is
						committed to delivering inspiration, clarity, and connection.
					</p>

					<p className='about-text'>
						Step into Josh's creative world and discover the vision behind the
						platform — a place designed to inform, inspire, and empower anyone
						who visits. Welcome to the future of storytelling, innovation, and
						design.
					</p>
				</section>
			</div>
			<FooterBNX />
		</section>
	);
};

export default About;
