/* eslint-disable no-unused-vars */
import { useState } from 'react'
import FriendsList from './components/FriendsList'
import Button1 from './components/Button1';
import Button2 from './components/Button2';


function App() {

  const listaAmici = ["Simone","Mauro","Miriana","Anne"];

  //const [buttonMessage, setButtonMessage] = useState("");
  const handleClickBtn1 = (value) => console.log(value);
  const handleClickBtn2 = (value) => console.log(value);


  return (
    <>
    <FriendsList listaAmici = {listaAmici}/>
    <Button1 onClick = {handleClickBtn2}/>
    <Button2 onClick = {handleClickBtn1}/>
    </>
  )
}

export default App
