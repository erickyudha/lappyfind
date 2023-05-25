import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Result from './components/Result';
import SpecForm from './components/SpecForm';
import UsageForm from './components/UsageForm';

function App() {
  document.title = 'LappyFind - Find your Dream Laptop'
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UsageForm />
      <SpecForm />
      <Result />
    </div>
  );
}

export default App;
