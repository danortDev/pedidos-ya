import React from 'react';
import {
  Card,
  Logo,
  Content,
  Link,
  Label,
  Name,
  Row
} from './elements';

// Constants
const BASE_LOGO_URL = 'https://d1v73nxuzaqxgd.cloudfront.net/restaurants/';
const BASE_PEDIDOS_URL = 'http://www.pedidosya.com.uy/restaurantes/montevideo/';


const Result = ({ logo, name, rating, deliveryTimeMaxMinutes, link }) => (
  <Card>
    <Logo src={`${BASE_LOGO_URL}${logo}`}/>
    <Content>
      <Name> {name} </Name>
      <Row>
        <Label> Rating: </Label>
        {rating}
      </Row>
      <Row>
        <Label> Delivery time: </Label>
        {deliveryTimeMaxMinutes}
      </Row>
      <Row>
        <Link
          target="__blank"
          href={`${BASE_PEDIDOS_URL}${link}-menu`}
        >
          See the menu here
        </Link>
      </Row>
    </Content>
  </Card>
);

export default Result;
