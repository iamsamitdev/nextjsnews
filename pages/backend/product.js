/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BackendLayout from '../../src/components/layouts/BackendLayout';

import { useEffect, useState } from 'react'
import ProductService from '../../src/services/ProductService'

const product = () => {

  // สร้างตัวแปรแบบ state ไว้เก็บข้อมูลสินค้าที่ได้จาก api
  const [products, setProducts] = useState([])

  useEffect(()=>{
    ProductService.getAllProduct().then(res=>{
      setProducts(res.data)
    })
  },[])

  return (
    <BackendLayout>
        <h1>สินค้า ({products.length} รายการ)</h1>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr className='bg-primary text-light'>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Barcode</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    products.map((item, index) => (
                        <tr key={index}>
                            <td>1</td>
                            <td><img src={item.product_image} alt="" width={50} /></td>
                            <td>{item.product_name}</td>
                            <td>{item.product_barcode}</td>
                            <td>{item.product_qty}</td>
                            <td>{item.product_price}</td>
                            <td>{item.product_category}</td>
                            <td>{item.product_date}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </BackendLayout>
  )
}

export default product