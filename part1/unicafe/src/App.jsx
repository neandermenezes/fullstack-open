import { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad
  const getAverageScore = () => (totalFeedback !== 0 ? ((good * 1) + (bad * -1)) / totalFeedback : 0);
  const getPositivePercentage = () => totalFeedback !== 0 ? ((good / totalFeedback) * 100) : 0;

  const statistics = [totalFeedback, getAverageScore(), getPositivePercentage()]

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      {<Statistics statistics={statistics} />}
    </div>
  )
}

export default App