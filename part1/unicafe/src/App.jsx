import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad
  const getAverageScore = () => (totalFeedback !== 0 ? ((good * 1) + (bad * -1)) / totalFeedback : 0);
  const getPositivePercentage = () => totalFeedback !== 0 ? ((good / totalFeedback) * 100) : 0;

  const statistics = [totalFeedback, getAverageScore(), getPositivePercentage()]

  const handleClick = (type) => {
    if (type === 'good') setGood(good + 1)
    if (type === 'neutral') setNeutral(neutral + 1)
    if (type === 'bad') setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      {/* <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button> */}
      {<Button onClick={() => handleClick('good')} text="good"/>}
      {<Button onClick={() => handleClick('neutral')} text="neutral"/>}
      {<Button onClick={() => handleClick('bad')} text="bad"/>}


      <h2>statistics</h2>
      

      {totalFeedback !== 0 ? <Statistics statistics={statistics} good={good} neutral={neutral} bad={bad}/> : <p>No feedback given</p>}
    </div>
  )
}

export default App