import logo from "./logo.svg";
import ".//css/App.css";
import ".//css/style.css";
import ".//css/animate.css";
import ".//css/aos.css";
import ".//css/default.css";
import ".//css/jquery.fancybox.min.css";
import ".//css/leaflet.css";
import ".//css/meanmenu.css";
import ".//css/responsive.css";
import ".//css/slick.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
