import React from 'react'
import Product from './Product'
import './Store.css'
function Store() {
    return (
        <div className="store">
            <div className="store_container">
                <div className="store_row">
                    <Product id= "1234" title="Red Cotton Anarkali Kurta" price={1750} image='https://img3.junaroad.com/uiproducts/17695363/pri_175_p-1619699000.jpg'/>
                    <Product id="5678" title="Printed Anarkali Kurta" price={1450} image="https://img3.junaroad.com/uiproducts/17562544/pri_175_p-1614011069.jpg"/>
                    <Product id="910" title="Solid Cotton Blend straight Kurta" price={1500} image="https://img3.junaroad.com/uiproducts/17627249/pri_175_p-1616765494.jpg"/>
                    <Product id="1112"title= "Green Cotton Blend Straight Kurta" price={1850} image="https://img3.junaroad.com/uiproducts/17948971/pri_175_p-1629798805.jpg"/>
                </div>
                <div className="store_row">
                <Product id="1314" title="'Printed A-line Kurta'" price={2250} image="https://img3.junaroad.com/uiproducts/17595718/pri_175_p-1615639908.jpg"/>
                <Product id="1516" title="Printed Skirt Top Set" price={1470} image="https://img2.junaroad.com/uiproducts/17076628/pri_175_p-1600353093.jpg"/>
                <Product id="1718" title="Embroided Straight Kurta" price={1119} image="https://img3.junaroad.com/uiproducts/17007094/pri_175_p-1584439167.jpg"/>
                <Product id="1920" title="Lance Detail Angrakha Kurta" price={1999} image="https://img3.junaroad.com/uiproducts/17426136/pri_175_p-1607349347.jpg"/>
               
                </div>
                <div className="store_row">
                <Product id="2122" title="Solid Suit Set" price={3499} image="https://img3.junaroad.com/uiproducts/17883778/pri_175_p-1627481691.jpg"/>
                <Product id="2324" title="Printed Kurta Palazzo Set" price={2000} image="https://img3.junaroad.com/uiproducts/17794508/pri_175_p-1623927644.jpg"/>
                      
                </div>
            </div>
            
        </div>
    )
}

export default Store