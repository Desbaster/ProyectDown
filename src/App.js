import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemCategoryContainer from "./components/itemCategoryContainer/ItemCategoryContainer.js";

function App() {
  const [items, setItems] = useState(0);

  useEffect(() => {
    const buscarItems = new Promise((resolve, reject) => {
      const items = [
        {
          id: "01",
          name: "Pulsera roja #1",
          category: "pulsera",
          description: "Pulsera roja de hilo encerado",
          value: "$50",
          img: "./img/pulsera.jpeg",
        },
        {
          id: "02",
          name: "Pulsera roja #2",
          category: "pulsera",
          description: "Pulsera roja de hilo encerado",
          value: "$50",
          img: "./img/pulsera.jpeg",
        },
        {
          id: "03",
          name: "Pulsera roja #3",
          category: "pulsera",
          description: "Pulsera roja de hilo encerado",
          value: "$50",
          img: "./img/pulsera.jpeg",
        },
        {
          id: "04",
          name: "Pulsera roja #4",
          category: "pulsera",
          description: "Pulsera roja de hilo encerado",
          value: "$50",
          img: "./img/pulsera.jpeg",
        },
      ];
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
    buscarItems
      .then(
        (res) => {
          setItems(res);
        },
        (reject) => {
          console.log("rechazada", reject);
        }
      )
      .catch((error) => {
        console.log("Error");
      })
      .finally(() => {
        console.log("Final");
      });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/category/:categoryId">
            {items.length > 0 ? (
              <ItemCategoryContainer productos={items} />
            ) : (
              <h2>Proximamente</h2>
            )}
          </Route>
          <Route path="/shopping-cart">
            <h2>Proximamente</h2>
          </Route>
          <Route path="/sign-in">
            <h2>Proximamente</h2>
          </Route>
          <Route path="/register">
            <h2>Proximamente</h2>
          </Route>
          <Route path="/shopping-cart">
            <h2>Proximamente</h2>
          </Route>
          <Route path="/item/:productId">
            {items.length > 0 ? (
              <ItemDetailContainer productos={items} />
            ) : (
              <h2>Proximamente</h2>
            )}
          </Route>
          <Route path="/">
            {items.length > 0 ? (
              <ItemListContainer productos={items} />
            ) : (
              <h2>Proximamente</h2>
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
