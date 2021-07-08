import { Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
const EditTask = (props) => {
  const data = props.data
  const [editData, setEditData] = useState(data)
  const [s, setS] = useState({
    description: editData[props.index].description,
    users: editData[props.index].users,
    date: editData[props.index].date,
    time: editData[props.index].time,
  })

  const handle = (event) => {
    setS({ ...s, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <p className="text-left">Task Description</p>
              <Form.Control
                type="text"
                value={s.description}
                name="description"
                onChange={handle}
              />
            </Form.Group>
            <Form.Group>
              <Row>
                <Col sm={6}>
                  <p className="text-left">Date</p>
                  <Form.Control
                    type="date"
                    name="date"
                    value={s.date}
                    onChange={handle}
                  />
                </Col>
                <Col sm={6}>
                  <p className="text-left">Time</p>
                  <Form.Control
                    type="time"
                    name="time"
                    value={s.time}
                    onChange={handle}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <p className="text-left">Assign User</p>
              <Form.Control
                type="text"
                name="users"
                value={s.users}
                onChange={handle}
              />
            </Form.Group>
            <Form.Group className="text-right">
              <Button
                onClick={() => props.setEditControl(false)}
                variant="none"
                className="mr-3"
              >
                Cancel
              </Button>
              <Button
                variant="success w-25 p-1"
                onClick={() => {
                  props.setEditControl(false)
                  setEditData((data[props.index] = s)) //update data
                }}
              >
                Save
              </Button>
            </Form.Group>
          </Form>

          <i
            onClick={() => {
              data.splice(props.index, 1)
              props.setEditControl(false)
            }}
            style={{
              fontSize: '20px',
              cursor: 'pointer',
              paddingBottom: '15px',
            }}
            className="fas fa-trash"
          ></i>
        </Col>
      </Row>
    </div>
  )
}

export default EditTask
