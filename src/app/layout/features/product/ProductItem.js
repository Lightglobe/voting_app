import React, { Component } from 'react'

export default class ProductItem extends Component {
    constructor(props) {
        super(props);//always call this first

        //custom method bindings here
        this.handleUpVote = this.handleUpVote.bind(this);
    }
    handleUpVote(){
        this.props.onVote(this.props.id);
    }
    render() {
        //inside render, 'this' references the component 
        return (
            <div className='item'>
                <img className="ui image ProductItem__image" alt='product_image' src={this.props.productImageUrl}/>
                <div className='middle aligned ProductList__info'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'/>
                        </a>
                        {this.props.votes}
                    </div>
                    <a href={"/"} className='header ProductList__header' >{this.props.title}</a>
                    <p className='description ProductList__description' >{this.props.description}</p>
                    <div className='extra ProductList__description'>
                        <span>Submitted by:</span>
                        <img alt="avatar_img" className='ui avatar image' src={this.props.submittedAvatarUrl}/>
                    </div>
                </div>
            </div>
        )
    }
}
