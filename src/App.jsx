import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div>
      <div style={{ marginTop: "300px", marginBottom: "100px" }}>
        <Link to="cutekitty" smooth={true} duration={500}>
          <button>Click for cutness</button>
        </Link>
        <h4>500px from top</h4>
      </div>
      <div>
        <h2 id="cutekitty">#Cute-Kitty</h2>
        <img
          style={{ width: "500px" }}
          src="public/gio-bartlett-gOMrZXQfZKc-unsplash.jpg"
          alt="black cat with green eyes portrait"
        ></img>
      </div>
    </div>
  );
}

export default App;
