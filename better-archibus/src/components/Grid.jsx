/* eslint-disable no-empty */
import { useState } from "react";
export default function Grid() {

    const [listaEm,setListaEm] = useState(null);

    
    fetch("http://localhost:3000/employees")
        .then(response =>  response.json()) // Read the response as text
        .then(data => setListaEm(JSON.stringify(data)))


    console.log(JSON.parse(listaEm));
    return (
        <>
       <table className="table vh-10">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </>
    )
}