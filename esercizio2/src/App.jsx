import ListaSpesa from "./components/ListaSpesa";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <ListaSpesa
        spesa={[
          {
            category: "Igiene e pulizia",
            items: ["Detergente pavimento", "Sapone piatti"],
          },
          {
            category: "Alimentari",
            items: ["Carne", "Pasta fresca", "Uova"],
          },
        ]}
      />
    </>
  );
}

export default App;
