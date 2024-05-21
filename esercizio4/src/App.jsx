/* eslint-disable react/jsx-no-undef */
import './App.css'
import Esercizio4 from './components/Esercizio4';
import Logo1 from './images/logo1.jpg';

function App() {
  
  const logos = [
    {
      src: Logo1,
      alt: 'Azienda 1',
      link: '#',
    },
    {
      src: '/images/logo2.jpg',
      alt: 'Azienda 2',
      link: '#',
    },
    {
      src: '/images/logo3.jpg',
      alt: 'Azienda 3',
      link: '#',
    },
    {
      src: '/images/logo4.jpg',
      alt: 'Azienda 4',
      link: '#',
    },
    {
      src: '/images/logo5.jpg',
      alt: 'Azienda 5',
      link: '#',
    },
  ];

  return (
    < Esercizio4/>
  );
}

export default App
