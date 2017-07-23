import React, {Component} from 'react';
import ServicesTabs from './ServicesTabs.jsx'
import {services} from './../../static/data/services.js'

class OurServices extends Component {

    render() {

        // const services = [
        //     {
        //         id:1,
        //         title: "Web design",
        //         img:'./images/service1.png',
        //         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        // Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' }, {
        // id:2, title:"Graphic design", img:'./images/service2.png', text:'cm7t,asldj dlkdfsuyaf asddfnaobufj
        // ddshfdkjhf  ' }, { id:3, title:"Online Support", img:'./images/service3.png', text:'cm7t,asldj dlkdfsuyaf
        // asddfnaobufj ddshfdkjhf  ' }, { id:4, title:"App Design", img:'./images/service4.png', text:'cm7t,asldj
        // dlkdfsuyaf asddfnaobufj ddshfdkjhf  ' }, { id:5, title:"Online Marketing", img:'./images/service5.png',
        // text:'cm7t,asldj dlkdfsuyaf asddfnaobufj ddshfdkjhf  ' }, { id:6, title:"SEO Service",
        // img:'./images/service5.png', text:'cm7t,asldj dlkdfsuyaf asddfnaobufj ddshfdkjhf  ' } ];


        return (
            <div className="services" id="services">
                <h2 className="black-text">Our services
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>

                <ServicesTabs services={services}/>
            </div>
        )
    }
}

export default OurServices;