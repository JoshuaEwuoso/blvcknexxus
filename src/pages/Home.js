import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Home.css';
import FooterBNX from '../components/FooterBNX';

const Home = () => {
	return (
		<section>
			<div className='Home-container'>
				<div className='App-header'>
					<p className='welcome'>Welcome to BlvckNexxus</p>
					<p className='descript'>
						This is the hub where Fashion, Tech, and News come together
					</p>
				</div>
				<div className='links'>
					{/* --------- Fashion / Kultre (temporary) --------- */}
					<Link
						to='/BlvckmenFashion'
						className='flip-card'
						onClick={() => (document.title = 'BlvckNexxus | BlvckmenFashion')}
					>
						<div className='flip-inner'>
							<div className='flip-front'>
								<img src='/blvckmenfashion.png' alt='Fashion' />
							</div>

							<div className='flip-back'>
								Fashion that blends culture, style, identity, and modern design.
							</div>
						</div>
					</Link>

					{/* -------------------- AeonByte -------------------- */}
					<Link
						to='/AeonByte'
						className='flip-card'
						onClick={() => (document.title = 'BlvckNexxus | AeonByte')}
					>
						<div className='flip-inner'>
							<div className='flip-front'>
								<img src='/AeonByte.png' alt='AeonByte' />
							</div>

							<div className='flip-back'>
								Empowering the next generation of developers & innovators.
							</div>
						</div>
					</Link>

					{/* --------------------- 4FrontTV --------------------- */}
					<Link
						to='/4FrontTV'
						className='flip-card'
						onClick={() => (document.title = 'BlvckNexxus | 4FrontTV')}
					>
						<div className='flip-inner'>
							<div className='flip-front'>
								<img src='/4front.png' alt='4FrontTV' />
							</div>

							<div className='flip-back'>
								Where curiosity meets conversation — stories, voices, and truth.
							</div>
						</div>
					</Link>
				</div>
			</div>
			<FooterBNX />
		</section>
	);
};

export default Home;
