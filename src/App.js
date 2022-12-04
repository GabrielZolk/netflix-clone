import categories from './api';
import './App.css';
import Row from "./components/Row"

function App() {
  return (
    <div className="App">
      {/*Navbar*/}
      {/*Destaques*/}
      {/*Em alta*/}

      {/*Filmes por categoria*/}
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
          />
        );
      })}
    </div>
  );
}

export default App;
