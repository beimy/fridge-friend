import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";
function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);
    
    const getVeggie = async () => {

       const check = localStorage.getItem("veggie");
       
       if(check){
        setVeggie(JSON.parse(check));
       }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}&number=10`
        );
        const data = await api.json();


        LocalStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        console.log(data.recipes)
       }; 
    };


    return (
            <div>
        <Wrapper>
            <h3>Vegetarian Options</h3>
            <Splide 
            options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: "5rem",
            }}>
            {veggie.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={'/recipes/' + recipe.id}>
                            <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                        </Link>
                    </Card>
                    </SplideSlide>
                );
})}
        </Splide>
        </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    `;


const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%, 0%);
        color: white;
        width: 100%;
        text-alight: center;
        font-weight: 600;
        font-size: 1 rem;
        height: 45%
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veggie;