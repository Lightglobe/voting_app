import './App.css';
import ProductHeader from './layout/features/product/ProductHeader';
import ProductItemList from './layout/features/product/ProductItemList';

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
