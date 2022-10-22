import './App.css';
import CardList from './component/Card-list';
import Summ from './component/Summ';

function App() {

  //создал локальный сервер
  //npm i json-server
  //npx json-server --watch db.json --port 3001

  return (
    <div 
    className="App">
      <section className="cards">
        <Summ/>
        <h1 className="cards__header">Coffee Shop</h1>
        <div className="cards__list">
          <CardList/>
        </div>
      </section>
    </div>
  );
}

export default App;
