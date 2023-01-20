import {
  Container, 
  Brunch,
  Delicious,
  DelicousP,
  ContainerCoffee,
  ExpressoContainer,
  Expresso

} from './assets/Style'



function App() {


  return (
    <Container>
      <h1>Menu Coffee</h1>
      <p>Aberto todos os dias. 8h - 21h</p>

      <Brunch>
        <Delicious>
          <DelicousP>
            COFFEE
          </DelicousP>
        </Delicious>

        <ExpressoContainer>
          <Expresso>Expresso</Expresso>
          <Expresso>R$ 8</Expresso>
        </ExpressoContainer>

        <ExpressoContainer>
          <Expresso>Double Expresso</Expresso>
          <Expresso>R$ 10</Expresso>
        </ExpressoContainer>

        <ExpressoContainer>
          <Expresso>Capuccino</Expresso>
          <Expresso>R$ 10</Expresso>
        </ExpressoContainer>

      </Brunch>

      <Brunch>
        <Delicious>
          <DelicousP>
          SANDWICH
          </DelicousP>
        </Delicious>

        <ExpressoContainer>
          <Expresso>Cheese Salad</Expresso>
          <Expresso>R$ 5</Expresso>
        </ExpressoContainer>

        <ExpressoContainer>
          <Expresso>Tuna Salad</Expresso>
          <Expresso>R$ 7</Expresso>
        </ExpressoContainer>

        <ExpressoContainer>
          <Expresso>Brie Cheese</Expresso>
          <Expresso>R$ 10</Expresso>
        </ExpressoContainer>
      </Brunch>

      <Brunch>
        <Delicious>
          <DelicousP>
          TEAS
          </DelicousP>
        </Delicious>

        <ExpressoContainer>
          <Expresso>White</Expresso>
          <Expresso>R$ 5</Expresso>
        </ExpressoContainer>

        <ExpressoContainer>
          <Expresso>Green</Expresso>
          <Expresso>R$ 7</Expresso>
        </ExpressoContainer>

        <ExpressoContainer>
          <Expresso>Blue</Expresso>
          <Expresso>R$ 10</Expresso>
        </ExpressoContainer>
      </Brunch>
    </Container>
  )
}

export default App
