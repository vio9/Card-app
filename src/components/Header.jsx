import styled from 'styled-components';


export default function Header({name}){


    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #aedff2;
  `;


  const Wrapper = styled.section`
  padding: 4em;
  background: #184059;
`;

    return(

        <Wrapper>
        <Title>
        🐲🐉 {name} ❄️🌨️
        </Title>
      </Wrapper>
    )
}