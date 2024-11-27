import React, { useEffect, useState } from 'react'
import { Button, Col, Row ,Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Roleassign from '../Roleassign/Roleassign';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function Users() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data1=[{
    userid:"",
    user_name:"",
    status:"",
    password:"",

  }]

  const [input, setinput]=useState(data1)

 
    const handelsubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post('http://localhost:3700/admin/post', input)
      try {
        console.log(res.data)
        console.log("data post successfully")
        handleClose();
        getdata();
        console.log("data post successfully")
  
      } catch (err) {
        console.log("data not insert ......", err)
      }
    }
  


    const [data, setdata] = useState([])

    const getdata = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/getdeatails`)
      try {
        console.log("data get successfully")
        setdata(result.data)
      } catch (err) {
        console.log(err)
  
      }
    }
    useEffect(() => {
      getdata();
      
    }, [])

  return (
    <>

    <Col style={{marginTop:'8%',marginLeft:'5%',justifyItems:'center'}}>
   <Row><h1>Users Details</h1></Row>
   <Button variant="primary" onClick={handleShow}>
        User Register
      </Button>
   <Modal  show={show} onHide={handleClose} style={{ marginTop: '3%' }}>

<Modal.Header  closeButton style={{ backgroundColor: '#eee' }}>
  <Modal.Title >User Register</Modal.Title>
</Modal.Header>
<Container style={{ backgroundColor: '#eee', Width: '900px' }}>
  <Row >
    <Col>
      <Form.Group className="mb-3">
        <Form.Label className='labelfield' style={{ borderRadius: '12px' }}>Enter User ID</Form.Label>
        <Form.Control  style={{ borderRadius: '12px' }} placeholder='Example 111'  onChange={(e) => setinput({ ...input, userid: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='labelfield' style={{ borderRadius: '12px' }}>Enter User Name</Form.Label>
        <Form.Control style={{ borderRadius: '12px' }} placeholder='Example Name' onChange={(e) => setinput({ ...input, user_name: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='labelfield' style={{ borderRadius: '12px' }}>Enter User Status</Form.Label>
        <Form.Control style={{ borderRadius: '12px' }} placeholder='Example Status' onChange={(e) => setinput({ ...input, status: e.target.value })} />
      </Form.Group>

    </Col>
    <Col>
     

      <Form.Group className="mb-3">
        <Form.Label className='labelfield' style={{ borderRadius: '12px' }}>Enter User Password</Form.Label>
        <Form.Control style={{ borderRadius: '12px' }} placeholder='Example 1234@ABc' onChange={(e) => setinput({ ...input, password: e.target.value })} />
      </Form.Group>

      
    </Col>
  </Row>
</Container>
<Modal.Footer style={{ backgroundColor: '#eee' }}>
  <Button className='add' variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button className='add' variant="primary" onClick={handelsubmit}>
    Save
  </Button>
</Modal.Footer>

</Modal>
    
   <Row> <Table striped bordered hover >
      <thead>

        <tr>
        
          <th>User Name</th>
          <th>Status</th>
          <th>roles</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>
        <tr>
          
          <td>{item.user_name}</td>
          <td>{item.status}</td>
          <td>{item.role_name}</td>
          <td>
          <Roleassign userid={item.userid} data11 ={getdata}/>
          
          </td>
        </tr>
        )}
       
       
      </tbody>
    </Table>
    </Row>
    </Col>
    </>
  )
}

export default Users