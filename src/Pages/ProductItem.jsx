import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductItem({item}) {



    return (
        <div className="card text-left">
            <img className="card-img-top" src={item.image} alt="..." />
            <div className="card-body bg-dark text-white" style={{height:170}}>
                <p  className="card-title font-weight-bold">{item.name}</p>
                <p className="card-text">{item.price} $</p>
                
                <button className='btn btn-secondary'>
                Add to cart &nbsp;
                <i className='fa fa-cart-plus'></i> 
                </button>

                <NavLink to={'/products/'+ item.id} className="btn btn-danger ml-2">Detail</NavLink>
            </div>
        </div>

    )
}
