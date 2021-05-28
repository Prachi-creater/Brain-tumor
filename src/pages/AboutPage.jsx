import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import Image from '../images/aboutusvector.jpg';

export default function AboutPage() {
    return (
        <div>
            <Appbar></Appbar>

            <div className='home-outer-div'>
                <div className="image">
                    <img src={Image} width='800px' height='700px' />
                </div>
                <div className='text-div'>
                    <h1><span style={{ color: "#001d3d", marginRight: '600px', fontSize: 70, fontWeight: 'bold' }}> About Us </span> </h1>
                    {/* <h1><span style={{ color: "#001d3d", fontFamily: 'dancing-script', marginLeft: '130px', fontSize: 70, fontWeight: 'bold' }}>Classification</span> </h1> */}
                    <p style={{ fontSize: 20, textAlign: 'left' }}>To find and accelerate cures for cancers and other diseases by fostering and rewarding a community of collaboration and innovation. We seek to spread awareness, expedite research and kinder treatments, and improve the quality of life for patients and their families.</p>
                    <p style={{ fontSize: 20, textAlign: 'left' }}> Primary tumors form in brain tissue because of abnormal cell growth. They can occur in several different forms. The most common are gliomas, which begin in the glue-like connective tissue of the brain. These aggressive tumors tend to infiltrate the brain, making them difficult to remove surgically. They’re particularly resistant to chemotherapy and radiation. </p>
                    <p style={{ fontSize: 20, textAlign: 'left' }}> Fred Hutch researchers are developing treatments for brain cancers that affect both adults and children. Our scientists work on the front lines of research to pioneer new approaches and shift the existing standard of care beyond surgery, chemotherapy and radiation.</p>
                </div>
            </div>

        </div>

    )
}