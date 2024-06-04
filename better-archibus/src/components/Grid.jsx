/* eslint-disable no-empty */
import {Link} from 'react-router-dom'
import { useState } from "react";
export default function Grid() {
  const [listaEm, setListaEm] = useState([]);

  fetch("http://localhost:3000/employees")
    .then((response) => response.json()) // Read the response as text
    .then((data) => setListaEm(data));

  //const listaEmArr = JSON.parse(listaEm);
  return (
    <>
      <div>
        <table className="table vh-10">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name First</th>
              <th scope="col">Name Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {listaEm.map((element, index) => (
              <tr key={index}>
                <td><Link to={"/employees/"+index}>{element.em_id}</Link></td>
                <td>{element.name_first}</td>
                <td>{element.name_last}</td>
                <td>{element.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
