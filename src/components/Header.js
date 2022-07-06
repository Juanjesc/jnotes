import '../styles/Header.css';
const Header = ({ handleToggleTheme }) => {
  return (
    <div>
			<header className="header">
				<h1 className="title">Notes</h1>
				<button 
					className="toggle-btn"
					onClick={() => handleToggleTheme((previousDarkMode) => !previousDarkMode)}
					>Toogle</button>
			</header>
		</div>
  )
}

export default Header
