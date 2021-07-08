import { Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
const ShowTask = (props) => {
  const data = props.data
  return (
    <div>
      {data.map((info, index) => (
        <Row>
          <Col sm={6} className="d-flex">
            <h2>{info.description}</h2>
          </Col>
          <Col sm={4}>
            <span className="text-danger">({info.date})</span>
          </Col>
          <Col sm={2}>
            <Row>
              <Button
                onClick={() => {
                  props.setEditControl(true) //use for control editTask and Show task
                  props.control(false) //use for control newTask and Show task
                  props.setIndex(index)
                }}
                variant="none"
              >
                <i className="fas fa-edit"></i>
              </Button>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  )
}

export default ShowTask
