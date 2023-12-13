import "./styles.css";
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Header />
            <Current />
            <Forecast />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
