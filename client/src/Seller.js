import React, { useState } from 'react'
import Axios from 'axios'
import './Seller.css'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
function Seller() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');


    const add = () => {
        Axios.post("http://54.251.93.15:5000/sellerpage", {
            id: id, title: title, price: price, image: image,
        }).then((response) => {
            console.log(response)
        })
    }
    return (

        <div style={{ backgroundImage: 'url("https://media.cntraveler.com/photos/57f54a129142f05c17741c8c/16:9/w_2560%2Cc_limit/hero-shop-1-cr-courtesy.jpg")', height: "700px", backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>

            <Form className="form">
                
                <FormGroup>
                    <Label>Id</Label>
                    <Input type="text" onChange={(e) => { setId(e.target.value); }} />
                </FormGroup>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" onChange={(e) => { setTitle(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label>Price</Label>
                    <Input type="text" onChange={(e) => { setPrice(e.target.value); }} />
                </FormGroup>
                <FormGroup>
                    <Label>Add image</Label>
                    <Input type="text" onChange={(e) => {
                        
                        { setImage(e.target.value); }
                    }}
                    />
                </FormGroup>

                
                <Button onClick={() => {
                    add();

                }}>Add</Button>
            </Form>

        </div>

    )
}

export default Seller
