import cup from '../assets/cupOfTe.jpg';
import './Introduction.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';



export default function Introduction() {
 return (
  <>
<div className='container'>

<div> 
<img className='image' src={cup} alt='' />
</div>

<div className='paragraph'>
<p> Ven a disfrutar con nosotros de diferentes variedades de té, traídas desde las mejores plantaciones a lo largo del mundo. Tenemos una trayectoria de 10 años que avalan nuestro compromiso con los amantes del té. </p>  

<p>Escogidos dentro de las 10 mejores teterías del país según la reviste Gourmet, ven a conocernos en el corazón de Maipú. </p>

<Link to="/Menu">Conoce nuestras Té-licias</Link>

<Link to="/Ubicacion">Conoce nuestra ubicación</Link>
</div>
</div>

<Form/>


</>
  )

}
