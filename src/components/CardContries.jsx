import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
export const CardContries = ({props})=>{
        
        const {name, population,flags,region,capital}= props
    return(
        <>
        { <Card style={{ width: 'auto',boxShadow:'1px 10px 10px -8px black' }}>
        <Card.Img style={{height:'180px', boxShadow:'0px 10px 10px -8px black', objectFit: 'cover'}} variant="top" alt={name.common} src={flags.svg} />
        <Card.Body>
          <Card.Title>{name.official}</Card.Title>
          <Card.Text>
            Poulation: {population}
          </Card.Text>
          <Card.Text>
            Region: {region}
          </Card.Text>
          <Card.Text>
            Capital: {capital}
          </Card.Text>
        </Card.Body>
        </Card>  }
        </>
    )

}