import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Product() {
  return (
    <>
    <Col style={{marginTop:'8%',marginLeft:'3%'}}>
   <Row><h1>Categories</h1></Row>
    
   <Row> <Table striped bordered hover >
      <thead>

        <tr>
        
          <th>ID</th>
          <th>Category Name</th>
          <th>Sub-Category-Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>1</td>
          <td>Electronics</td>
          <td>S1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Toyes</td>
          <td>s2</td>
        </tr>
       
      </tbody>
    </Table>
    </Row>
    </Col>
    </>
  )
}

export default Product