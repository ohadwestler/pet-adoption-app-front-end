import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Card, Button } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Pets({setClickedPet}){
    const [pets, setPets] = useState(false)
    let navigate = useNavigate()

    function updatePet(pet){
      navigate("/updatepet")
      setClickedPet(pet)
  }

  function showMore(pet){
    setClickedPet(pet)
    navigate("/showmore")
  }
    useEffect(()=>{
axios.get(`http://localhost:3001/pets`).
then(res=>setPets([...res.data])).catch(err=>alert(err.response.data.message))
    },[])
    return(
        <div className=''>{!pets?
        <Alert className='m-5' variant="success">
  <Alert.Heading>you currently do not own or foster any pets.</Alert.Heading>
</Alert>:
<>
  <div className="cards">
    {
pets.map((pet, index)=>
<Card style={{ width: "18rem" }} key= {index} className = "my-4"> 
              <Card.Img className="img" variant="top" src={pet.uploadResult}/>
              <Card.Body>
                <Card.Title>Name: {pet.name}</Card.Title>
                <Card.Text>{pet.biography}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Type:</strong> {pet.type}</ListGroupItem>
                <ListGroupItem><strong>Dietary Restriction:</strong> {pet.dietary}</ListGroupItem>
                <ListGroupItem><strong>Breed:</strong> {pet.breed}</ListGroupItem>
                <ListGroupItem><strong>Height:</strong> {pet.height}</ListGroupItem>
                <ListGroupItem><strong>Wheight:</strong> {pet.weight}</ListGroupItem>
                <ListGroupItem><strong>Hypoallergenic?:</strong> {pet.hypo}</ListGroupItem>
                <ListGroupItem><strong>Color:</strong> {pet.color}</ListGroupItem>
                <ListGroupItem><strong>Adoption Status:</strong> {pet.adoptionStatus}</ListGroupItem>
              </ListGroup>
              <Card.Body className='d-flex justify-content-lg-evenly'>
                
                <Button onClick={()=> updatePet(pet)}>Edit</Button>
                <Button onClick={()=>showMore(pet)}>Show More</Button>
              </Card.Body>
            </Card>
)}
</div>
</>}
        </div>
    )
}