/* eslint-disable react/prop-types */
export default function FriendsList(props) {
    return (
        <>
         <h1>Lista amici</h1>
         <table>
            {props.listaAmici.map((element, index) => (
                <tr key={index}>
                    <td>{element}</td>
                    <td>{index + 1}</td>
                </tr>
            ))}
         </table>
        </> 
        );
}