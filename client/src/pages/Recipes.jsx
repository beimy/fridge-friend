import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react';

function Recipes() {

    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();

    }, [params.name]);

    return <div>{details.title}</div>;
}


const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    dipslay: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.5rem;
        line-height: 3rem;
    }
    ul {
        margin-top: 2rem;
    }
    
    
    `

export default Recipes;