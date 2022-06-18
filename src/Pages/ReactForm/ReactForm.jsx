import React from 'react'
import TableProduct from './TableProduct'

export default function ReactForm() {


    
  return (
    <form className='container'>
        <hr />
        <p>Home/Products/Create</p>
        <hr />
        <h3>Create product</h3>
        <div className='card'>
          <div className='card-header bg-dark text-warning'>
            <h4>Product info</h4>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <h5 className='text-secondary'>id</h5>
                  <input className='form-control' id="id" name='id' placeholder='product id'/>
                </div>
                <div className='form-group'>
                  <h5 className='text-secondary'>name</h5>
                  <input className='form-control' id="name" name='name' placeholder='product name'/>
                </div>
                <div className='form-group'>
                  <h5 className='text-secondary'>price</h5>
                  <input className='form-control' id="price" name='price' placeholder='product price'/>
                </div>
              </div>
              <div className='col-6'>
                <div className='form-group'>
                  <h5 className='text-secondary'>image</h5>
                  <input className='form-control' id="image" name='image' placeholder='product image link'/>
                </div>
                <div className='form-group'>
                  <h5 className='text-secondary'>ProductType</h5>
                  <select className='form-control'>
                    <option value={'mobile'}>mobile</option>
                    <option value={'laptop'}>laptop</option>
                    <option value={'tablet'}>tablet</option>
                  </select>
                </div>
                <div className='form-group'>
                  <h5 className='text-secondary'>price</h5>
                  <textarea name='description' className='form-control' id="description" placeholder='product description'/>
                </div>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <button className='btn btn-primary'>
              Create 
            </button>
            <button className='btn btn-success ml-2'>
              Update 
            </button>
          </div>
        </div>
        <div className='mt-2'>
          <TableProduct />
        </div>
    </form>
  )
}
