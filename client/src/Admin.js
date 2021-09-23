import React from 'react'
import './Admin.css'
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
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Admin
