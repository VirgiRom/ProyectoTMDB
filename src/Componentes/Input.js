import {Form} from 'react-bootstrap';

function Input(props) {
  const { label, type, placeholder, name, register } = props;
  return (
    <div>
      <Form.Group className="mb-3" control="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type || "text"}
          name={name || ""}
          placeholder={placeholder}
          {...register}
        />
      </Form.Group>
    </div>
  );
}
export default Input;