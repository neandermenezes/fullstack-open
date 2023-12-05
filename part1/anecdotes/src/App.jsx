import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.from(Array(8), () => 0))
  const [mostVoted, setMostVoted] = useState(0)

  useEffect(() => {
    setMostVoted(points.indexOf(Math.max(...points)))
  }, [points])

  const vote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    console.log(points)
  }

  const getRandomNumber = () => Math.floor(Math.random() * 8)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} points</p>
      
      <button onClick={() => setSelected(getRandomNumber)}>next anecdote</button>
      <button onClick={() => vote()}>vote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {points[mostVoted]} points</p>
    </div>
  )
}

export default App