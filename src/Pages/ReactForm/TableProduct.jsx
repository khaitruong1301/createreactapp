import React from 'react'

export default function TableProduct(props) {
  return (
    <table className='table'>
      <thead>
        <tr className='bg-secondary text-warning'>
          <th>id</th>
          <th>image</th>
          <th>name</th>
          <th>price</th>
          <th width={300}>description</th>
          <th>type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <img src='https://picsum.photos/id/50/200/200' width={50} height={50} alt={'...'} />
          </td>
          <td>Product 1</td>
          <td>1.000</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
          <td>Laptop</td>
          <td>
            <button className='btn btn-danger'>
              <i className='fa fa-trash' ></i>
            </button>
            <button className='btn btn-primary ml-2'>
              <i className='fa fa-edit'></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
