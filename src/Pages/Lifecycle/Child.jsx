import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps child');
        return null;
    }

    render() {
        const {id,name,price,img} = this.props.product;

        // const {id,name,price,img} = this.props;
        console.log('render child');
        return (
            <div className='container'>
                <h3>Lifecycle child</h3>
                <div className='card w-25'>
                    <img src={img} alt={'...'} />
                    <div className='card-body' >
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount() {
        console.log('componentDidMount child');
    }
}
