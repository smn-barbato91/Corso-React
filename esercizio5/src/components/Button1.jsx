/* eslint-disable react/prop-types */
export default function Button1(props) {

    const message = "Cliccato bottone 2";
    const handleClick = () => {
        props.onClick(message);
    }
    return (
        <button onClick={handleClick}>Bottone 1</button>
    )
    
}