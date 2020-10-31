import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className='item'>
               
                    <img className="ui image ProductItem__image" alt='product_image' src={this.props.productImageUrl}/>
    
                <div className='middle aligned ProductList__info'>
                    <a href={"/"} className='header ProductList__header' >{this.props.title}</a>
                    <p className='description ProductList__description' >{this.props.description}</p>
                    <div className='extra ProductList__description'>
                        <span>Submitted by:</span>
                        <img alt="avatar_img" className='ui avatar image' src={this.props.submitterAvatarUrl}/>
                    </div>
                </div>
            </div>
        )
    }
}
