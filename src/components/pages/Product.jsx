import React from "react";
import DefaultPage from "../DefaultPage";
import { useParams } from "react-router-dom";

const fruits = [
    { id: 1, name: 'Apple', description: 'A sweet red fruit that keeps the doctor away.' },
    { id: 2, name: 'Banana', description: 'A soft, yellow fruit that is high in potassium.' },
    { id: 3, name: 'Orange', description: 'A juicy citrus fruit rich in vitamin C.' },
    { id: 4, name: 'Mango', description: 'A tropical fruit known for its sweet and juicy taste.' },
    { id: 5, name: 'Pineapple', description: 'A tropical fruit with a spiky exterior and sweet interior.' },
    { id: 6, name: 'Grapes', description: 'Small, juicy fruits that grow in bunches and come in green or purple.' },
    { id: 7, name: 'Strawberry', description: 'A red, heart-shaped fruit that is juicy and fragrant.' },
    { id: 8, name: 'Blueberry', description: 'A small, round blue fruit that is a powerful antioxidant.' },
    { id: 9, name: 'Watermelon', description: 'A large green fruit with a juicy, red interior perfect for summer.' },
    { id: 10, name: 'Papaya', description: 'A tropical fruit with orange flesh and black seeds inside.' },
    { id: 11, name: 'Peach', description: 'A soft, fuzzy fruit with sweet yellow or white flesh.' },
    { id: 12, name: 'Pear', description: 'A green or yellow fruit with a soft, grainy texture and sweet taste.' },
    { id: 13, name: 'Kiwi', description: 'A small brown fruit with bright green flesh and tiny black seeds.' },
    { id: 14, name: 'Pomegranate', description: 'A fruit with a tough red outer skin and jewel-like seeds inside.' },
    { id: 15, name: 'Plum', description: 'A juicy fruit with smooth skin and a sweet to tart flavor.' },
    { id: 16, name: 'Cherry', description: 'A small, round red fruit that is sweet or tart and has a pit inside.' },
    { id: 17, name: 'Guava', description: 'A tropical fruit with green skin and pink or white flesh.' },
    { id: 18, name: 'Coconut', description: 'A large nut with white edible flesh and refreshing water inside.' },
    { id: 19, name: 'Lemon', description: 'A yellow citrus fruit known for its sour taste and vitamin C.' },
    { id: 20, name: 'Lime', description: 'A small green citrus fruit that is sour and commonly used in drinks.' }
  ];
  
function Product(){
    const {id} = useParams();
    const fruit = fruits[id -1]
    return (
        <DefaultPage>
            <h1>Product Page</h1>

            {fruit ? (
                <>
                    <p>Loading Information for product {id}</p>
                    <p><strong>{fruit.name}</strong> :{fruit.description}</p>

                </>
            ):(
                <p>No fruits found yet.</p>

            )}
        

            
        </DefaultPage>
    )
}

export default Product;