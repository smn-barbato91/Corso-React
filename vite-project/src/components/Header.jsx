/* eslint-disable react/prop-types */
export default function Header({myName}) {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Il mio nome è {myName}</h1>
        </div>
      </header>
    );
  }