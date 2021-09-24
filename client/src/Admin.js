import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
function Admin() {
    return (
        <div style={{ backgroundImage: 'url("https://media.cntraveler.com/photos/57f54a129142f05c17741c8c/16:9/w_2560%2Cc_limit/hero-shop-1-cr-courtesy.jpg")', height: "700px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }} >
            <Form className="form">
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="text"/>
                </FormGroup>
               <Link to="/sellerpage"> <Button>Submit</Button></Link>
            </Form>
        </div>
    )
}

export default Admin
