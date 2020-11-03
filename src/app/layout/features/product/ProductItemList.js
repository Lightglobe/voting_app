import React, { Component } from 'react'
import { fetchProductData } from '../data/mockAPI';
import ProductItem from './ProductItem'

export class ProductItemList extends Component {
  //constructor(props){
  //  super(props);
    //the only way to set a state this way is in constructor
    // we treat this.state object as immutable, modifying this.state
    // outside this.setState is a bad practice.
    //this.state = {
    //products: []
    //};

   //if we use arrow function for handleProductUpVote, we dont need to use bind.
    //this.handleProductUpVote = this.handleProductUpVote.bind(this);
  //}

  state = {
    products: []
  }

  async componentDidMount(){
    try {
      const response = await fetchProductData();
      const productsData = await response.sort((a, b) => (
        b.votes - a.votes
      ));
      this.setState({products: productsData});
    }catch(error){
      console.log(error);
    }

  }

  handleProductUpVote = (productId) => {    
    // In order to keep the state intact we create a new array for modification
    // and then update the state. Map returns a new array.
    const nextProducts = this.state.products.map((product) => {
      if(product.id === productId){
        // create new object and copy properties
        return Object.assign({},product, {
          //overwrite votes property
          votes: product.votes +1,
        });
      }else {
        // unmodified product
        return product;
      }
    });
    // setState is asynchronous, no guarantee when react will update
    // the state and re render the component
    this.setState({
      products: nextProducts.sort((a, b) => (
        b.votes - a.votes
      ))
    });
  }


  render() {
          //mutating arrays or objects can be a dangerous pattern
          const productsComponents = this.state.products.map((product) => (
            <ProductItem
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submittedAvatarUrl = {product.submitterAvatarUrl}
                productImageUrl = {product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));

        return (
            <div className='ui unstackable items list'>
                {productsComponents}
            </div>
        )
    }
}
 
export default ProductItemList;
