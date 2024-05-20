export default function Browswers() {

    const listaBrowsers = [
        {
            name: "Google",
            link: ["https://www.google.it"]
          },
          {
            name: "Yahoo",
            link: ["https://it.search.yahoo.com/"]
          },
          {
            name: "Duckduckgo",
            link: ["https://duckduckgo.com/"]
          },
          {
            name: "Lycos",
            link: ["https://www.lycos.it/"]
          }
    
    ];


    return (

      <main>
        <div className='container mt-4'>
          {/* Itera attraverso ogni categoria nella shoppingData */}
          {listaBrowsers.map((data, index) => (
            //L'elemento key è un attributo speciale in React che viene utilizzato per identificare univocamente 
            //gli elementi figlio durante l'iterazione o la ricreazione di elenchi dinamici
          <div key={index} className="category mb-3">
            <h2 className="category-name">{data.name}</h2>
            <ul className="list-group">
              {data.link.map((link, idx) => (
                 <li key={idx} className="list-group-item">
                  <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                 </li>
              ))}
            </ul>
        </div>
      ))}
      </div>
      </main>
    )
}