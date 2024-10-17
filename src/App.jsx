import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Homepage from "./pages/Homepage";
import Accordion from './components/Accordion';
import Angry from './pages/Angry';
import Anxious from './pages/Anxious';  
import Hopeless from './pages/Hopeless';
import Lonely from './pages/Lonely';
import Sad from './pages/Sad';
import Stressed from './pages/Stressed';
import Weird from './pages/Weird';
import './styles/global.css';
import './styles/Header.css';
import CarouselComponent from './components/Carousel';
import { carouselData } from './data/CarouselData';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Homepage />
                <Accordion />
                <CarouselComponent carouselData={carouselData} /> 
              </>
            } 
          />
          <Route path="/angry" element={<Angry />} />
          <Route path="/anxious" element={<Anxious />} />
          <Route path="/hopeless" element={<Hopeless />} />
          <Route path="/lonely" element={<Lonely />} />
          <Route path="/sad" element={<Sad />} />
          <Route path="/stressed" element={<Stressed />} />
          <Route path="/weird" element={<Weird />} />
        </Routes>
      </div>
    </Router>
  );
}
