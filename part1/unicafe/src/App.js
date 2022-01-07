import React, { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ name, handleClick }) => ( 
  <button onClick={handleClick}>
    {name}
  </button>
);

const StatisticLine = ({ name, score }) => <tr><td>{name} {score}</td></tr>;

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good + clicks.neutral + clicks.bad ) / 3;
  const positive = clicks.good / all * 100;
  
  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine name="good" score={clicks.good} />
          <StatisticLine name="neutral" score={clicks.neutral} />
          <StatisticLine name="bad" score={clicks.bad} />
          <StatisticLine name="all" score={all} />
          <StatisticLine name="average score" score={average} />
          <StatisticLine name="positive" score={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  return (
    <div>
  
      <Header text="give feedback" />
        <Button name="good" handleClick={() => setClicks({...clicks, good: clicks.good + 1})} />
        <Button name="neutral" handleClick={() => setClicks({...clicks, neutral: clicks.neutral + 1})} />
        <Button name="bad" handleClick={() => setClicks({...clicks, bad: clicks.bad + 1})} />

      <Header text="statistics" />
        <Statistics clicks={clicks} />
    </div>
  )
}

export default App