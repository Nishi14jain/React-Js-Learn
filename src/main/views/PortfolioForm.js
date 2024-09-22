import React, { useState } from "react";
import { Container, Row, Col, Image, Table, Form, Button } from 'react-bootstrap';

const PortFolio = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        age: '',
        address: '',
        primary_education: '',
        institutename1: '',
        secondary_education: '',
        institutename2: '',
        companyName: '',
        currentRole: '',

    });
    const [showCompanyFields, setShowCompanyFields] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSwitchChange = () => {
        setShowCompanyFields(!showCompanyFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('user', JSON.stringify(formData));
        setFormData({
            name: '',
            email: '',
            phone: '',
            role: '',
            age: '',
            address: '',
            primary_education: '',
            institutename1: '',
            secondary_education: '',
            institutename2: '',
            companyName: '',
            currentRole: '',

        });
        console.log(formData)
    }


    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFullname">
                            <Form.Label>Full Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name " name="name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formNumber">
                            <Form.Label>Phone Number </Form.Label>
                            <Form.Control type="text" placeholder="Enter Number" name="phone" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCurrentRole">
                            <Form.Label>Current Role </Form.Label>
                            <Form.Control type="text" placeholder="Enter Current Role" name="role" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAge">
                            <Form.Label>Age </Form.Label>
                            <Form.Control type="text" placeholder="Enter Age" name="age" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address </Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" name="address" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formcompany/institue">
                            <Form.Label> Current Company Or Institue </Form.Label>
                            <Form.Control type="text" placeholder="Enter Company or Institue" name="company" onChange={handleChange} />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formcompany/institue">
                            <Form.Label> Current Company Or Institue </Form.Label>
                            <Form.Control type="text" placeholder="Enter Company or Institue" name="company" onChange={handleChange} />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formprimaryeducation">
                            <Form.Label> Primary Education </Form.Label>
                            <Form.Control type="text" placeholder="Enter Primary Education" name="primary_education " onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="forminstitutename1">
                            <Form.Label> Institue Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Institition Name" name="institutename1 " onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formsecondaryeducation">
                            <Form.Label> Secondary Education </Form.Label>
                            <Form.Control type="text" placeholder="Enter Secondary Education" name="secondary_education " onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="forminstitutename1">
                            <Form.Label> Institue Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter  Institition Name" name="institutename2 " onChange={handleChange} />
                        </Form.Group>

                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Currently Employed?"
                            onChange={handleSwitchChange}
                            checked={showCompanyFields}
                        />

                        {showCompanyFields && (
                            <>
                                <Form.Group className="mb-3" controlId="formCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Company Name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formCurrentRole">
                                    <Form.Label>Current Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Current Role"
                                        name="currentRole"
                                        value={formData.currentRole}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </>
                        )}

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    
                </Col>
            </Row>
            
        </Container>

    );
};
export default PortFolio;