
import './App.css'
import Footer from './components/Footer'
import User from './components/User'

function App() {
  let user =  <User name = "Simone" nazione="Italia" email="prova@hotmail.it" cellulare="333333333" />
  let footer = <Footer cp = "TEST"/>
  return (
    <>
    {user}
    {footer}
    </>
  )
}

export default App
