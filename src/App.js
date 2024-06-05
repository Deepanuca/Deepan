import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Haader from './components/Haader';


function App() {
  return (
    <div className="App">
      <Haader/>
      <section id="home">Home Section</section>
      <section id="about">About Section</section>
      <section id="services">Services Section</section>
      <section id="contact">Contact Section</section>
    </div>
  );
}

export default App;
