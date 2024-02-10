import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Trainers from "./pages/Trainers/Trainers"
import Gallery from "./pages/Gallery/Gallery"
import Plane from "./pages/Plane/Plane"
import NotFound from "./pages/NotFound/NotFound"
import Navbar from './components/Navbar'
import './App.css';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plane/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
