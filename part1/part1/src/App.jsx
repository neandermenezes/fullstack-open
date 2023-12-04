import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{<Header course={course} />}</h1>
      <p>
        {<Content subject={part1} />} {<Total totalExercises={exercises1} />}
      </p>
      <p>
        {<Content subject={part2} />} {<Total totalExercises={exercises2} />}
      </p>
      <p>
        {<Content subject={part3} />} {<Total totalExercises={exercises3} />}
      </p>
      <p>Number of exercises {<Total totalExercises={exercises1 + exercises2 + exercises3} />}</p>

    </div>
  )
}

export default App