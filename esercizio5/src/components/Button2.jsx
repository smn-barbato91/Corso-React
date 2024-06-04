export default function Button2(props) {
    const message = "Cliccato bottone 1";

    const handleClick = () => {
        props.onClick(message);
    }

    return (
        <button onClick={handleClick}>Bottone 2</button>
    )
}