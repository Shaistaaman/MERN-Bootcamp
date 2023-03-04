import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './db'
import axios from 'axios'

function App() {
    //const [name, setName] = useState([]);

    return (
        <>
            <div style={{ margin: '10rem' }}>
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Age
                            </td>
                            <td>
                                Actions
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees.length > 0 && Employees
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.name}

                                            </td>
                                            <td>
                                                {item.age}

                                            </td>
                                            <td>
                                                <Button onClick={() => { alert(item.id) }}>Edit</Button>
                                                &nbsp;
                                                <Button onClick={() => { alert(item.id) }}>Delete</Button>
                                            </td>
                                        </tr>)

                                })
                                :
                                <tr>"no record found"</tr>

                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default App;
