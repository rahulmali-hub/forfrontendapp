import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
function Subcategary() {
  return (
    <>
    <Col>
   <Row style={{marginTop:'8%',marginLeft:'3%'}}> <h1>Sub-Categories</h1></Row>
   <Row> <Table striped bordered hover style={{marginLeft:'3%'}}>
      <thead>
        <tr>
        
          <th>Sub-Category-ID</th>
          <th>Sub-Category Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>S1</td>
          <td>Mobiles</td>
          
        </tr>
        <tr>
          <td>S2</td>
          <td>Tedy</td>
        </tr>
       
      </tbody>
    </Table>
    </Row>
    </Col>
    </>
  )
}

export default Subcategary