import React from 'react';
import '../styles/4FrontTV.css';
import Footer4FrontTV from '../components/Footer4FrontTV';

const episodes = [
	{
		title: "If the glove don't fit, you must acquit!",
		date: '2022-02-15',
		episode: '01',
		image: 'micpic.png',
		link: 'https://google.com',
	},
];

const Thrud4Front = () => (
	<div className='fronttv-page'>
		<div class='podcast-page-container'>
			<main className='fronttv-main'>
				{/* HERO SECTION */}
				<section className='hero'>
					<div className='hero-content'>
						<img src='4front.png' alt='Podcast' className='hero-title' />

						<p className='hero-text'>
							News you care about, presented with clarity, conversation, and
							curiosity. Stay informed. Stay aware. Stay at the forefront.
						</p>

						<div className='hero-buttons'>
							<a
								href='https://google.com'
								className='btn btn-primary'
								target='_blank'
								rel='noopener noreferrer'
							>
								<ion-icon name='headset'></ion-icon>
								Listen Now
							</a>

							<div className='subscribe-box'>
								<p className='subscribe-label'>Subscribe On:</p>

								<div className='subscribe-buttons'>
									<a
										href='https://music.apple.com'
										className='btn-link'
										target='_blank'
										rel='noopener noreferrer'
									>
										<ion-icon name='logo-apple'></ion-icon> Apple Music
									</a>

									<div className='subscribe-buttons'>
										<a
											href='https://youtube.com'
											className='btn-link'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ion-icon name='logo-apple'></ion-icon> Youtube
										</a>

										<div className='subscribe-buttons'>
											<a
												href='https://spotify.com'
												className='btn-link'
												target='_blank'
												rel='noopener noreferrer'
											>
												<ion-icon name='logo-apple'></ion-icon> Spotify
											</a>

											<a
												href='https://soundcloud.com'
												className='btn-link'
												target='_blank'
												rel='noopener noreferrer'
											>
												<ion-icon name='logo-soundcloud'></ion-icon> SoundCloud
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* EPISODE LIST (AUTOMATIC) */}
				<section className='podcast'>
					<ul className='podcast-list'>
						{episodes.map((ep, index) => (
							<li key={index}>
								<a href={ep.link} className='podcast-card'>
									<figure className='card-banner'>
										<img src={ep.image} alt={ep.title} />
										<div className='card-banner-icon'>
											<ion-icon name='play'></ion-icon>
										</div>
									</figure>

									<div className='card-content'>
										<div className='card-meta'>
											<time datetime={ep.date}>
												{new Date(ep.date).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric',
													year: 'numeric',
												})}
											</time>

											<p className='pod-epi'>Episode: {ep.episode}</p>
										</div>

										<h3 className='h3 card-title'>{ep.title}</h3>
									</div>
								</a>
							</li>
						))}
					</ul>
				</section>

				{/* NEWSLETTER */}
				<section className='newsletter'>
					<div className='newsletter-card'>
						<div className='card-content'>
							<h3 className='h3'>Sign Up For Our Newsletter — It's Free!</h3>

							<p className='card-text'>
								The biggest stories, delivered to your inbox. Stay informed,
								Stay ahead.
							</p>
						</div>

						<form className='card-form'>
							<input
								type='email'
								placeholder='Your Email Address'
								required
								className='input-field'
							/>

							<button type='submit' className='btn btn-primary'>
								Subscribe
							</button>
						</form>
					</div>
				</section>
			</main>
		</div>
		<Footer4FrontTV />
	</div>
);

export default Thrud4Front;
