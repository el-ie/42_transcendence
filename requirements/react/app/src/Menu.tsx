import { Link } from 'react-router-dom';

function Menu(): JSX.Element {
	return (
		<>
		<div className="logo">pong</div>
		<div className="menu">
			<Link to="/">Home</Link>
			<Link to="/play">Play</Link>
			<Link to="/chat">Chat</Link>
			<Link to="/scoreboard">Scoreboard</Link>
		</div>
		</>
	);
}
			// <span className="logo">pong</span>

export default Menu;
