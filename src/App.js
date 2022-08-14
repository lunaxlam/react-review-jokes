import './index.css';
import Joke from "./components/Joke"

function App() {
  return (
    <div className="App">
      <Joke 
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke
        setup="Three guys walk into a bar."
        punchline="You'd think one of them would've seen it."
      />
      <Joke
        setup="My landlord wanted to talk to me about how highmy heating bills are."
        punchline="I said, 'Sure. My door is always open.'"
      />      
    </div>
  );
}

export default App;
