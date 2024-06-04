/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function FriendsList() {
  const listaAmici = [
    { name: "Davide", count: 5 },
    { name: "Anna", count: 3 },
    { name: "Stefano", count: 1 },
  ];

  const [friends, setFriends] = useState(listaAmici);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddFriend = () => {
    if (inputValue.trim() === "") return; // Evita di aggiungere nomi vuoti

    setFriends((prevFriends) => {
      const friendIndex = prevFriends.findIndex(friend => friend.name.trim().toLowerCase() === inputValue.trim().toLowerCase());

      if (friendIndex !== -1) {
        // Se l'amico esiste già, incrementa il suo count
        const updatedFriends = [...prevFriends];


        updatedFriends[friendIndex] = {
          ...updatedFriends[friendIndex],
          count: updatedFriends[friendIndex].count + 1,
        };


        return updatedFriends;
      } else {
        // Se l'amico non esiste, aggiungine uno nuovo
        return [...prevFriends, { name: inputValue, count: 1 }];
      }
    });

    setInputValue(""); // Resetta il valore dell'input dopo l'aggiunta
  };

  return (
    <>
      <h3>Esercizio 3</h3>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddFriend}>Add Friend</button>

      {friends.map((friend, index) => (
        <p key={index}>
          {index + 1}. {friend.name} {friend.count}
        </p>
      ))}
    </>
  );
}
