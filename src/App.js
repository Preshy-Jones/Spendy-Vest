import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <div id='main-body'></div>
      <Footer />
    </div>
  );
}

export default App;
