
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2=() =>{
    alert('button clicked');
  }
  const handleClick3=() =>{
    alert('button clicked');
  }

return (
    <>
    <h3>React core concepts</h3>
    <Friends></Friends>
     <Users></Users>
    <Team></Team>
    <Counter></Counter>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>Click Me2</button>
    <button onClick={() => {alert('third clicked')}}>Third</button>
    <button onClick={handleClick3}>clicke me3</button>
  
    </>
  )
}

export default App
