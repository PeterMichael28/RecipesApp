
import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';



function App() {





  
  return (
   <BrowserRouter>
   <Header />
     <Pages />
   </BrowserRouter>
  );
}

export default App;
