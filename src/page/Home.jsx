import { CardContries } from "../components/CardContries"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react";
import { getDataContries } from "../helper/api";
import { Header } from "../components/Header";
 export const Home=()=>{
    const [contrie, setContrie] = useState([]);
    const fetchContries = async(data)=>{
        const contries = await  getDataContries(data);
        setContrie(contries);
    }

    const HandleCountry2 = async({target})=>{
        const dato=target.value
        if(dato.length > 3 || dato.length == 0 ){
            const filterContries = await getDataContries(`https://restcountries.com/v3.1/name/${dato}`);
            setContrie(filterContries) 
        }
    }

    const HandleCountry = async(e)=>{
        const dato=e.target.value;
        if (dato.length === 0) {
            fetchContries();
          }

        if(dato.length > 3 ){
          const contriesData=  contrie.filter((country) =>
          country.name.official.toUpperCase().includes(dato.toUpperCase())
          );
           setContrie(contriesData);
        }
    }

    const HandleRegion = async(e)=>{
            const filterContries = await getDataContries(`https://restcountries.com/v3.1/region/${e.target.value}`);
            setContrie(filterContries) 
    }

    useEffect(()=>{
        fetchContries();
    },[])
    return(
        <>
        <Header />
         <Container>
            <Row className="mb-3">
                <Col lg={4}>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">-o</InputGroup.Text>
                    <Form.Control
                    placeholder="Search for a contry..."
                    aria-label="search"
                    aria-describedby="basic-addon1"
                    onChange={HandleCountry}
                    />
                    </InputGroup>
                </Col>
                <Col lg={2} className="ms-auto">
                    <Form.Select aria-label="Default select example" onChange={HandleRegion}>
                        <option>Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row xs={8} md={12} lg={12} >
                { contrie.length > 0 ?
                contrie.map((data,index)=>(
                    <Col className="pb-4"  key={index}  sm={6} md={4} lg={3}><CardContries props={data}/></Col> ))
                : 'cargando' 
                }    
            </Row>
        </Container>
            
        </>
    )
 }