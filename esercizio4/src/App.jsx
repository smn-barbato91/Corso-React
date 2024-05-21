/* eslint-disable react/jsx-no-undef */
import './App.css'
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
    <Container className="text-center">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={8}>
          <div className="pentagon">
            {logos.map((logo, index) => (
              <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={logo.alt} className="pentagon-img" />
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App
