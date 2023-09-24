import Card from 'react-bootstrap/Card';
import data from '../data.json';
import './Menu.css'


export default function Menu() {
  console.log(data)
  return (
    <>
      <div className='title'>Nuestras té-licias</div>
      <p className='descriptionTitle'>Todas las variedades incluyen un trozo de las opciones de pasteles del dia </p>
      <div className='menu'>
        {
          data.drinks.map(drink => (

            <Card className='bodyCard' key={drink.sku} style={{ width: '18rem' }}>
              <Card.Body className='bodyCard'>
                <Card.Img variant="top" src={drink.src}/>
                <Card.Title className='titleCard'>{drink.name}</Card.Title>
                <Card.Text className='textCard'>{drink.description}</Card.Text>
                <Card.Text className='priceCard' >{drink.price}  {drink.size}</Card.Text>
              </Card.Body>
            </Card>

          ))
        }
      </div>

    </>
  )
}
