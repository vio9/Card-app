import Card from './components/Card';
import './App.css';
import Header from './components/Header';
import dany from './components/assets/dany.webp'
import jon from './components/assets/jon.webp'
import styled from 'styled-components';

const FlexWrapper = styled.div`
display:flex;
justify-content:center;
background-color: #AEDFF2;
@media (max-width: 768px) {
  flex-direction: column;
}
`;

function App() {
  return (
    <div className="App">
      <Header 
      name="Welcome on the GOT Card App !" 
      />

      <FlexWrapper>    
          <Card
          name="Daenerys Targaryen"
          image={dany}
          family="🐉 House Targaryen"
          description="Queen of Meereen, Khaleesi of the Great Grass Sea, Mother of Dragons"
          />
          <Card
          name="Jon Snow"
          image={jon}
          family="🐺 House Stark"
          description="King of the North, he knows nothing"
          />

      </FlexWrapper>     
    </div>
  );
}

export default App;
