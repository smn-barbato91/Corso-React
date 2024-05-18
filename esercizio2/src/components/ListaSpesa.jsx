import '../styles.css';

const spesa = [
    {
        category: "Igiene e pulizia",
        items: ["Detergente pavimento", "Sapone piatti"]
      },
      {
        category: "Alimentari",
        items: ["Carne", "Pasta fresca", "Uova"]
      }

];
export default function ListaSpesa() {
    return  (
        <div className='container mt-4'>
          {/* Itera attraverso ogni categoria nella shoppingData */}
          {spesa.map((categoryData, index) => (
            //L'elemento key è un attributo speciale in React che viene utilizzato per identificare univocamente 
            //gli elementi figlio durante l'iterazione o la ricreazione di elenchi dinamici
          <div key={index} className="category mb-3">
            <h2 className="category-name">{categoryData.category}</h2>
            <ul className="list-group">
              {/* Itera attraverso ogni prodotto all'interno della categoria */}
              {categoryData.items.map((item, idx) => (
                <li key={idx} className="list-group-item">{item}</li>
              ))}
            </ul>
        </div>
      ))}
      </div>

    )
}