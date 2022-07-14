import '../styles/Header.css';
import logotype from  '../img/Logo.png';
const Header = () => {
  return (
    <div>
			<header className="header">
				<div className="logo-wrapper">
					<img src={logotype} alt="logo" />
				</div>
				
			</header>
		</div>
  )
}

export default Header
