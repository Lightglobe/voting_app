import './App.css';
import ProductHeader from './Components/Product/ProductHeader';
import ProductItemList from './Components/Product/ProductItemList';

function App() {
  return (
    <div className="App">
      <ProductHeader/>
      <div className="ui centered grid">
        <ProductItemList/>
      </div>
    </div>
  );
}

export default App;
