/* eslint-disable react/jsx-no-undef */
import './App.css'

function App() {
  const logos = [
    {
      src: '/images/logo1.png',
      alt: 'Azienda 1',
      link: 'https://www.azienda1.com',
    },
    {
      src: '/images/logo2.png',
      alt: 'Azienda 2',
      link: 'https://www.azienda2.com',
    },
    {
      src: '/images/logo3.png',
      alt: 'Azienda 3',
      link: 'https://www.azienda3.com',
    },
    {
      src: '/images/logo4.png',
      alt: 'Azienda 4',
      link: 'https://www.azienda4.com',
    },
    {
      src: '/images/logo5.png',
      alt: 'Azienda 5',
      link: 'https://www.azienda5.com',
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
