import {useState} from 'react'

/* Part1 - Function that returns a function and Passing Event Handlers to Child Components */

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }
  

  return (
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App

////////////////////////////////////////////////////////////////////
/* Part1 - part D? */
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({handleClick, text}) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);
//   const [total, setTotal] = useState(0);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//       <p>Total Clicks: {total}</p>
//     </div>
//   )
// }

// export default App


/* This is Part 1 - States/Hooks
// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

// const App = (props) => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () =>
//   setCounter(0);

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button handleClick={increaseByOne} text='plus' />
//       <Button handleClick={decreaseByOne} text='minus' />
//       <Button handleClick={setToZero} text='zero' />
//     </div>
//   )
// }

// export default App


///////////////////////////////////////////

/* This is one section of Part 1 - Props*/
// const Hello = (props) => {
//   const { name, age } = props;

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - age;
//   }

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App