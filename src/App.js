import './App.css';
import { Hero, Features, Articles } from './container/index'
import { NavBar, Footer } from './components/index'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
