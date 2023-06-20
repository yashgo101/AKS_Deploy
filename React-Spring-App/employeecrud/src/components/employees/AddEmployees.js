import React, { useState } from 'react'
import { Button, Alert, Container, Row, Card, Col, Form, InputGroup } from 'react-bootstrap'
// import { save } from '../../EmployeeService'

import axios from "axios";

const baseUrl = "/api/v1"

var config = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const save = (url, data) => {
    return axios({ ...config, url: baseUrl + url, data: data })
}

const AddEmployees = () => {
    const [status, setStatus] = useState("")
    const [employee, setEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "address": "",
        "designation": "",
        "age": "",
    })
    const addEmployeeHandler = (e) => {
        e.preventDefault()
        save("/employees", employee)
            .then(res => {
                setStatus(res.data)
            })
            .catch(err => {
                setStatus(err)
            })
    }
    return (
        <>

            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card>
                            <Card.Header className='text-center'>
                                Add New Employee
                            </Card.Header>
                            <Card.Body>
                                {status.length > 0 && (
                                    <Alert variant='success'>{status}</Alert>
                                )}
                                <Form onSubmit={addEmployeeHandler}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            First Name
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                            onChange={e => {
                                                setEmployee({
                                                    ...employee,
                                                    firstName: e.target.value
                                                })
                                            }} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Last Name
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                            onChange={e => {
                                                setEmployee({
                                                    ...employee,
                                                    lastName: e.target.value
                                                })
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Email
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                            onChange={e => {
                                                setEmployee({
                                                    ...employee,
                                                    email: e.target.value
                                                })
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Address
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                            onChange={e => {
                                                setEmployee({
                                                    ...employee,
                                                    address: e.target.value
                                                })
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Designation
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                            onChange={e => {
                                                setEmployee({
                                                    ...employee,
                                                    designation: e.target.value
                                                })
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Age
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                            onChange={e => {
                                                setEmployee({
                                                    ...employee,
                                                    age: e.target.value
                                                })
                                            }}
                                            type='number' />
                                    </InputGroup>
                                    <InputGroup className='text-center'>
                                        <Button type='submit'>Create Employee record</Button>
                                    </InputGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default AddEmployees