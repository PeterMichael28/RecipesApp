
import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {





  
  return (
   <BrowserRouter>
   <Header />
     <Pages />
     <Footer />
   </BrowserRouter>
  );
}

export default App;
