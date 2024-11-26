import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'



function Roleassign({userid,data11}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);
    const [roles, setroles] = useState([])

    const getroles = async () => {
        try {
          const result = await axios.get('http://localhost:3700/admin/roles')
        console.log("data get successfully")
        setroles(result.data)
      } catch (err) {
        console.log(err)
  
      }
    }

    const [postrole, setpostrole] = useState('')

  

    const handelRolePost = async (e) => {
      e.preventDefault();
      const postData = {
        roleid: postrole,
        userid: userid,
      };
  
      try {
        const res = await axios.post('http://localhost:3700/admin/roleassign', postData);
        console.log("Role assigned successfully:", res.data);
        data11()
        handleClose();
        
      } catch (err) {
        console.error("Error assigning role:", err);
      }
    };
    
useEffect(()=>{
    getroles();
},[])
  return (
   <>
   <Button variant="primary" onClick={handleShow} style={{height:'30px',width:'125px',justifyItems:'center'}}>
        Role assign
      </Button>
      <Modal show={show} onHide={handleClose} style={{ marginTop: '3%' }}>

<Modal.Header closeButton style={{ backgroundColor: '#eee' }}>
  <Modal.Title >Assign Role</Modal.Title>
</Modal.Header>
<Container style={{ backgroundColor: '#eee' }}>
  <Form.Group className="mb-3">
    <Form.Label style={{ borderRadius: '12px' }}>Employee ID</Form.Label>
    <Form.Control style={{ borderRadius: '12px' }} disabled
      value={userid}
      onChange={(e) => {


        setpostrole(e.target.value);
      }} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label style={{ borderRadius: '12px' }}>Role Name  </Form.Label>

    <select

      value={postrole}
      onChange={(e) => {

        setpostrole(e.target.value);
      }}
      style={{ borderRadius: '12px', height: '40px', border: 'none' }}
    >
      <option value="">Select a role</option>
      {roles.map((role) => (
        <option key={role.roleid} value={role.roleid}>
          {role.role_name}
        </option>
      ))}
    </select>

  </Form.Group>

</Container>
<Modal.Footer style={{ backgroundColor: '#eee' }}>
  <Button className='add' variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button className='add' variant="primary" onClick={handelRolePost}>
    Save
  </Button>
</Modal.Footer>

</Modal >

   </>
  )
}

export default Roleassign