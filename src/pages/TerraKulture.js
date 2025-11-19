// src/pages/TerraKulture.js
import React from 'react';
import '../styles/TerraKulture.css';
import FooterTerraKulture from '../components/FooterTerraKulture';

const collections = [
	{
		title: 'Modern Suits',
		description:
			'Tailored silhouettes for every body, inspired by global cities.',
	},
	{
		title: 'Cultural Attire',
		description:
			'Heritage-inspired garments with contemporary cuts and details.',
	},
	{
		title: 'Everyday Classics',
		description:
			'Effortless pieces you can dress up or down, any day, anywhere.',
	},
];

const featuredPieces = [
	{
		name: 'Olive Heritage Suit',
		tag: 'Signature Piece',
		description:
			'A refined two-piece suit blending African-inspired lines with modern tailoring.',
	},
	{
		name: 'Gold-Trim Kaftan',
		tag: 'Limited',
		description:
			'Minimalist kaftan with subtle gold detailing for formal and cultural events.',
	},
	{
		name: 'Terra Trench Coat',
		tag: 'New',
		description:
			'Layered earth tones with a structured silhouette for all seasons.',
	},
];

const TerraKulture = () => {
	return (
		<div className='tk-page'>
			<main className='tk-main'>
				{/* HERO */}
				<section className='tk-hero'>
					{/* Use your TK logo filename here */}
					<img
						src='/Terra.png'
						alt='TerraKulture Logo'
						className='tk-hero-logo'
					/>

					<h1 className='tk-hero-title'>
						Where Culture Meets Modern Elegance.
					</h1>

					<p className='tk-hero-sub'>
						TerraKulture is a home for tailored suits, cultural silhouettes, and
						everyday pieces that honor where you’re from and who you’re
						becoming.
					</p>

					<div className='tk-hero-actions'>
						<button className='tk-btn tk-btn-primary'>
							Explore the Collection
						</button>
						<button className='tk-btn tk-btn-ghost'>View Lookbook</button>
					</div>
				</section>

				{/* COLLECTION CATEGORIES */}
				<section className='tk-section tk-collections'>
					<h2 className='tk-section-title'>Collections</h2>
					<p className='tk-section-sub'>
						Designed for movement, presence, and stories that cross borders.
					</p>

					<div className='tk-collection-grid'>
						{collections.map((col) => (
							<article key={col.title} className='tk-collection-card'>
								<div className='tk-collection-overlay' />
								<h3>{col.title}</h3>
								<p>{col.description}</p>
								<button className='tk-link-btn'>View Collection</button>
							</article>
						))}
					</div>
				</section>

				{/* FEATURED PIECES */}
				<section className='tk-section tk-featured'>
					<h2 className='tk-section-title'>Signature Pieces</h2>
					<p className='tk-section-sub'>
						A glimpse into the garments that define TerraKulture’s philosophy.
					</p>

					<div className='tk-featured-grid'>
						{featuredPieces.map((piece) => (
							<article key={piece.name} className='tk-feature-card'>
								<span className='tk-feature-tag'>{piece.tag}</span>
								<h3>{piece.name}</h3>
								<p>{piece.description}</p>
								<button className='tk-link-btn'>Details</button>
							</article>
						))}
					</div>
				</section>

				{/* STORY / ABOUT */}
				<section className='tk-section tk-story'>
					<div className='tk-story-inner'>
						<div className='tk-story-line' />
						<div className='tk-story-content'>
							<h2 className='tk-section-title'>Our Story</h2>
							<p>
								TerraKulture was created for the ones who carry many worlds
								within them. Those who feel the pull of heritage and the call of
								modern life. Our garments are rooted in African influence,
								shaped by global silhouettes, and tailored to honor every form.
							</p>
							<p>
								From structured suits to flowing cultural attire, each piece is
								made to move with you — from boardrooms to celebrations, from
								city nights to quiet mornings. This is fashion that remembers
								where you came from while dressing you for where you are going.
							</p>
						</div>
					</div>
				</section>
			</main>

			<FooterTerraKulture />
		</div>
	);
};

export default TerraKulture;
