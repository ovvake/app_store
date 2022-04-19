import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Productos = () => {
    const [Products, setProducts] = useState([])
    

    const getData = () => {

        fetch('https://app-itj-bootcamp.herokuapp.com/getProducts')
        .then((res) => res.json())
        .then((res) => {
          setProducts(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])
    

    return (
        <>
        <div>
          <Link 
            to="/test"
            className='' 
          >
            Agregar Producto
          </Link>
        </div>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Image</th>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
        {Products.map((item, i) => {
          return( 
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>  
            <td>{item.price}</td>
            <td>{item.categoria}</td>  
            <td>{item.descripcion}</td>
            <td>{item.img_url}</td> 
            <td><input type="button" value="Actualizar"/></td>
            <td><input type="button" value="Eliminar"/></td> 
          </tr>
          )
        })}
        </tbody>
        </Table>

        </>
    )
  };
  

 