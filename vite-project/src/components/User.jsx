/* eslint-disable react/prop-types */
export default function User(props) { 
    return (
        <main>
            <div className="header-wrapper">
                <h1>Il mio nome completo è {props.name}</h1>
                <p>Il mio paese è {props.nazione}</p>
                <p>La mia email è {props.email}</p>
                <p>Il mio numero di cellulare è {props.cellulare}</p>
            </div>
        </main>
    )
}