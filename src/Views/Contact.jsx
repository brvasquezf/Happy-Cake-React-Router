
import { Form, Button } from 'react-bootstrap'


const Contact = () => {
  return (
    <Form>
        <Form.Label id='tittle'>¿Cuentanos en que te podemos ayudar?</Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="secondary">Enviar</Button>{' '}
    </Form>
  )
}

export default Contact