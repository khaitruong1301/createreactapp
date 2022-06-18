import React, { Component } from 'react'
import Child from './Child';
export default class Lifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            product: {
                id: 1,
                name: 'Product 1',
                price: 1000,
                img: 'https://picsum.photos/id/17/200/200'
            }
        }
        console.log('constructor');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('props');
        return true;
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    render() {
        const { id, name, price, img } = this.state.product;
        console.log('render');
        return (
            <div className='container'>
                <h3>Lifecycle</h3>
                <h3>{this.state.number}</h3>
                <button onClick={()=>{
                    this.setState({
                        number:this.state.number + 1
                    })
                }} className='btn btn-success'>increment</button>
                {/* <Child id={id} name={name} price={price} img={img} /> */}
                <Child product={this.state.product} />
                <button className='btn btn-success' onClick={()=>{
                    const newProduct = {...this.state.product};
                    newProduct.price = 5000;
                    this.setState({
                        product: newProduct
                    })
                }}>Set price</button>
            </div>

        )
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
}

