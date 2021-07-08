import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

//show task

const NewTask = (props) => {
  const [details, setDetails] = useState({
    description: '',
    users: '',
    date: '',
    time: '',
  })
  const handle = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <p className="text-left">Task Description</p>
          <Form.Control
            type="text"
            value={details.description}
            name="description"
            onChange={handle}
            required
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col sm={6}>
              <p className="text-left">Date</p>
              <Form.Control
                type="date"
                name="date"
                value={details.date}
                onChange={handle}
                placeholder="date"
              />
            </Col>
            <Col sm={6}>
              <p className="text-left">Time</p>
              <Form.Control
                type="time"
                name="time"
                value={details.time}
                onChange={handle}
                placeholder="time"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <p className="text-left">Assign User</p>
          <Form.Control
            type="text"
            name="users"
            value={details.users}
            onChange={handle}
          />
        </Form.Group>
        <Form.Group className="text-right">
          <Button onClick={()=>props.control(false)} variant="none" className="mr-3">
            Cancel
          </Button>
          <Button
            variant="success w-25 p-1"
            onClick={() => {
              props.setdata([...props.data, details])
              props.control(false)
            }}
          >
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default NewTask
