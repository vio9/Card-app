import {useState} from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';





const Container = styled.div`
width:50%;
background-image: linear-gradient(to bottom, #6593A6, #004673);
color: #5cb9f2;
justify-content:center;
border-radius:30px;
padding:20px;
margin:30px;
`;

const TitleCard = styled.h2`
color:#AEDFF2;
padding:10px;
`;

const CardImage = styled.img`
width:40%;
border-radius:15px;
&:hover {filter: grayscale(1);
transition:0.3s;}`

const Paragraph = styled.p`
color: #F0F8FF;
`
;

const Family = styled.p`
color: #AEDFF2;
font-weight: bolder;
`
;


export default function Card({name, image, family, description}){

const [favorite, setFavorite] = useState(false);


 const handleChange = () => {

    return(
        setFavorite(!favorite)
    )
 }




    return(
        <>
        <Container>
            <TitleCard>{name}</TitleCard>
            <CardImage src={image} />

            <Family>{family}</Family>
            <Paragraph>{description} </Paragraph>
           <Button variant="contained" onClick={handleChange}> favorite character? add it !  {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }</Button>
       
        </Container>
        </>
    )
}