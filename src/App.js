import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/shared/navbar/NavbarComponent';
import SectionComentarios from './components/sectionComentarios/SectionComentarios';
import SectionImagenApp from './components/sectionImagenApp/SectionImagenApp';
import SectionCarousel from './components/sectionCarousel/SectionCarousel';




function App() {
  return (
    <div className="App">
    <div className="container-fluid">

     <img src="/webtrade/src/assets/js/holder.js/300x200"/>

      <NavBarComponent/>
      <SectionImagenApp backgroundColor="#1dd1a1" title="Sección 2" />
      <SectionComentarios backgroundColor="#ff6b6b" title="Sección 1" />
      <SectionCarousel backgroundColor="#48dbfb" title="Sección 3" />
      <SectionComentarios backgroundColor="#feca57" title="Sección 4" />
      <SectionComentarios backgroundColor="#5f27cd" title="Sección 5" />
      <NavBarComponent/>

    </div>
  </div>
  );
}

export default App;
