import logo from '../assets/logo.png';
import '../styles/Banner.css';

function Banner() {
	const title = 'La maison jungle'
	return <div className='lmj-banner'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <div className='lmj-title'><h1>{title}</h1></div>
            </div>
}

export default Banner