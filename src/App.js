import NewTask from './NewTask'
import ShowTask from './ShowTask'
import EditTask from './EditTask'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import './App.css'

function App() {
  const [data, setdata] = useState([])
  const [control, setControl] = useState(true)
  const [editControl, setEditControl] = useState(false)
  const [index, setIndex] = useState()
  console.log(data)
  return (
    <Row>
      <Col
        sm={2}
        style={{ backgroundColor: '#292929', minHeight: '100vh' }}
      ></Col>

      <Col sm={10} style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
        <Col
          sm={4}
          style={{ backgroundColor: '#e0ecff' }}
          className="mt-5 border rounded"
        >
          <Row className="bg-light mb-2">
            <Col sm={10} className="p-1 border">
              Task {data.length}
            </Col>
            <Col
              sm={2}
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              className="border"
              onClick={() => setControl(true)}
            >
              +
            </Col>
          </Row>

          {!control ? (
            !editControl ? (
              <ShowTask
                control={setControl}
                data={data}
                setEditControl={setEditControl}
                setIndex={setIndex}
              />
            ) : (
              <EditTask
                setEditControl={setEditControl}
                data={data}
                index={index}
              />
            )
          ) : (
            <NewTask control={setControl} setdata={setdata} data={data} />
          )}
        </Col>
      </Col>
    </Row>
  )
}

export default App
