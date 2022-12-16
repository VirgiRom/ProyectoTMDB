import Alert from 'react-bootstrap/Alert'
import './Alert.css'

function Alerta(props) {
  const { text, variant } = props;
  return <Alert className='alert' variant={variant}>{text}</Alert>;
}
export default Alerta;