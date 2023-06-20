import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
// import { get } from '../service/EmployeeService'

import axios from "axios";

const baseUrl = "/api/v1"

var postConfig = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    }
}

var getConfig = {
    method: 'get',
    headers: {}
};


export const save = (url, data) => {
    return axios({ ...postConfig, url: baseUrl + url, data: data })
}

export const get = (url) => {
    return axios({ ...getConfig, url: baseUrl + url })
}


const Employees = () => {


    const [employees, setEmployees] = useState([])


    const getEmployees = () => {
        get("/employees")
            .then(res => {
                console.log(res.data)
                setEmployees(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getEmployees() // called the method each time when the page is loaded

    }, [])




    console.log(employees)

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Employee List</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Designation</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            employees?.map(employee => {
                                                return (
                                                    <tr key={employee.id}>
                                                        <td>{employee.id}</td>
                                                        <td>{employee.firstName}</td>
                                                        <td>{employee.lastName}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.address}</td>
                                                        <td>{employee.designation}</td>
                                                        <td>{employee.age}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Employees