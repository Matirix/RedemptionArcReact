import './App.css';
import Content from './Content';
import Hero from './Hero';
import Navbar from './Navbar';
import Column from './Column';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>

      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
