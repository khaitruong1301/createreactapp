import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
    const params = useParams();
    console.log(params)
    console.log(props)
  return (
    <div>Detail</div>
  )
}
