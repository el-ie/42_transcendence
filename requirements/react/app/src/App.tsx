import { Routes, Route } from "react-router-dom";

import "./app.css";

import Home       from "./Home";
import Play       from "./Play";
import Chat       from "./Chat";
import Scoreboard from "./Scoreboard";

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/"           element={<Home />} />
			<Route path="/play"       element={<Play />} />
			<Route path="/chat"       element={<Chat />} />
			<Route path="/scoreboard" element={<Scoreboard />} />
		</Routes>
	);
}

export default App;
