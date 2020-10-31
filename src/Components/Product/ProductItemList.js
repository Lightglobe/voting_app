import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductItemList extends Component {
    render() {
        const products = [
            {
              id: 1,
              title: 'Yellow Pail Human Record Ghost Nail Chill Dumb',
              description: 'On-demand sand castle construction expertise.',
              url: '#',
              votes: 56,
              submitterAvatarUrl: 'images/avatars/daniel.jpg',
              productImageUrl: 'images/products/image-aqua.png',
            },
            {
              id: 2,
              title: 'Supermajority: The Fantasy Congress League',
              description: 'Earn points when your favorite politicians pass legislation.',
              url: '#',
              votes: 34,
              submitterAvatarUrl: 'images/avatars/kristy.png',
              productImageUrl: 'images/products/image-rose.png',
            },
            {
              id: 3,
              title: 'Tinfoild: Tailored tinfoil hats',
              description: 'We already have your measurements and shipping address.',
              url: '#',
              votes: 23,
              submitterAvatarUrl: 'images/avatars/veronika.jpg',
              productImageUrl: 'images/products/image-steel.png',
            },
            {
              id: 4,
              title: 'Haught or Naught rum blue',
              description: 'High-minded or absent-minded? You decide.',
              url: '#',
              votes: 37,
              submitterAvatarUrl: 'images/avatars/molly.png',
              productImageUrl: 'images/products/image-yellow.png',
            },
          ];
          const productsComponents = products.map((product) => (
            <ProductItem
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submittedAvatarUrl = {product.submitterAvatarUrl}
                productImageUrl = {product.productImageUrl}
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