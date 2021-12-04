import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import FAQ from './screens/FAQ';


function App() {
  return (
    <div className="App">
      <Header />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
