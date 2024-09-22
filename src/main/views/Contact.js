import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import '../css/style.css';
import me1 from '../images/me1.png';
import me2 from '../images/me2.avif';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Contact() {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setUser(JSON.parse(storedUser)); // Parse the user data and set it to state
      }
   }, []);

   // Render a loading message if user data is not available yet
   if (!user) {
      return <div>Loading user data...</div>;
   }

   return (
      <div>
         <Container fluid className="mt-5">

            <Row>

               <Col xs={12} md={4} style={{ textAlign: 'center' }} >
                  <Image src={me1} roundedCircle style={{ width: '25%', marginTop: '50px' }} />
                  <div>
                     <p className="" style={{ fontSize: '50px', marginLeft: '30px' }} >
                        {/* Nishi Jain */}
                        {user.name}
                     </p>
                     <p style={{ fontSize: '20px' }}>
                        {user.role} <br />
                        {user.companyName ? user.companyName : user.institutename2}
                     </p>


                     <div className='iconDiv' >
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                           <FaLinkedin className='socialIcons' /></a>
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                           <FaGithub className='socialIcons' />
                        </a>
                     </div>

                     <div>
                        <p style={{ fontSize: '20px', marginTop: '20px' }}>
                           <a href='tel:8602312081' style={{ textDecoration: 'none', color: '#fff' }}>+91 {user.phone}</a>
                        </p>
                        <p style={{ fontSize: '20px' }}>
                           <a href='mailto:nishi.jain14112001@gmail.com' style={{ textDecoration: 'none', color: '#fff' }}>{user.email}</a>
                        </p>
                     </div>
                  </div>
               </Col>

               <Col xs={12} md={8} className="top-right-col" >
                  <div style={{ display: 'flex', alignItems: 'center' }}>

                     <div className='main-sub-con'>
                        <p style={{ color: '#333', marginTop: '50px', fontWeight: '600', fontSize: '50px', marginLeft: '50px', color: '#333' }}>
                           A Passionate Web Developer with Innovative <span className='ideas'> <br></br>Ideas</span>
                           <span style={{ fontSize: '20px', fontWeight: '100', display: 'block', lineHeight: '1.2', color: '#000', fontWeight: '400', marginTop: '20px' }}>
                              This simple website just resembles a personal portfolio website giving information about myself.
                           </span>
                        </p>
                        <div style={{ marginLeft: '10%', marginBottom: '20%' }}>
                           <a href='mailto:{user.email}' style={{ textDecoration: 'none', color: '#fff' }}> <button className='callme'>
                              mail me
                           </button></a>
                           <a href='tel:{user.phone}' style={{ textDecoration: 'none', color: '#fff' }}>  <button className='callme'>
                              call me
                           </button></a>
                        </div>
                     </div>



                     <Image src={me2} style={{ width: '50%', opacity: 'initial' }} className='main-image'></Image>

                  </div>


               </Col>


            </Row>

            <Row className='row2'>
               <Col xs={12} md={4} style={{ textAlign: 'center', fontWeight: '800', marginTop: '10px', fontSize: '25px' }} >
                  <p style={{ marginTop: '150px' }}>About me</p>

               </Col>
               <Col xs={12} md={8} style={{ textAlign: 'center', marginBottom: '50px' }} >
                  <p style={{ fontWeight: '800', marginTop: '80px', fontSize: '25px', }}>
                     Hye there, <br></br>
                     <span style={{ fontSize: '20px' }}>
                        Some of my Details
                     </span>
                  </p>

                  <Table>

                     <tbody className='table-body-details'>
                        <tr >
                           <td > <span className='info_head'>Name:</span> {user.name}</td>
                           <td style={{ textAlign: 'left' }}><span className='info_head'>Age:</span> {user.age}</td>

                        </tr>
                        <tr>
                           <td > <span className='info_head'>Residence:</span> {user.address}</td>
                           <td style={{ textAlign: 'left' }}><span className='info_head'>College:</span>{user.institutename1} </td>
                        </tr>

                        <tr>
                           <td > <span className='info_head'>Company:</span> {user.companyName}</td>
                           <td style={{ textAlign: 'left' }}><span className='info_head'>Role:</span>  {user.currentRole}</td>
                        </tr>
                        <tr>
                           <td > <span className='info_head'>Email:</span><a href='mailto:{user.email}' style={{ textDecoration: 'none', color: '#000' }}> nishi.jain14112001@gmail.com</a>
                           </td>
                           <td style={{ textAlign: 'left' }}><span className='info_head'>Mobile:</span><a href='tel:{user.phone}' style={{ textDecoration: 'none', color: '#000' }}> +91 86023102081</a></td>
                        </tr>
                     </tbody>
                  </Table>



               </Col>
            </Row>

            <Row>

               <Col xs={12} md={4} style={{ textAlign: 'center', fontWeight: '800', marginTop: '10px', fontSize: '25px' }} >
                  <div>
                     <p style={{ marginTop: '200px' }}>
                        Education
                     </p>
                  </div>
               </Col>
               <Col xs={12} md={8} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '30px' }} >
                  <div style={{ marginTop: '50px', }}>
                     <h5 className='education_head'>Primary Education</h5>
                     <p className='edu_content'>
                        I got my primary education {user.primary_education} from an {user.institutename1} <br></br>
                         <br></br>
                     </p>


                     <h5 className='education_head'>Secondary Education</h5>
                     <p className='edu_content'>
                        "I pursued my {user.secondary_education} from {user.institutename2}
                        <br></br>
                        Completed my MCA from MITS (Gwalior)
                     </p>

                     <h5 className='education_head'>Current Education</h5>
                     <p className='edu_content'>
                        Currently working as an Laravel Developer at SNS Sytem<br></br>
                        Worked on Sevral Saas Web Applications.
                     </p>
                  </div>
               </Col>
            </Row>


            <Row className='row2'>
               <Col xs={12} md={4} style={{ textAlign: 'center', fontWeight: '800', marginTop: '10px', fontSize: '25px' }} >
                  <div>
                     <p style={{ marginTop: '60px' }}>
                        Experience
                     </p>
                  </div>
               </Col>

               <Col xs={12} md={8} style={{ textAlign: 'center', fontWeight: '800', marginTop: '10px', fontSize: '25px', marginBottom: '50px', }} >
                  <div style={{ marginTop: '50px', width: '80%' }}>
                     <p className='edu_content'>
                        I am a Software Developer with over 1.5+ years of experience in developing and maintaining web applications, primarily using the Laravel framework. My expertise includes strong proficiency in PHP, object-oriented programming, and MVC design patterns, along with hands-on experience with PHP frameworks like Core PHP, Laravel, and CodeIgniter.
                     </p>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Contact;
