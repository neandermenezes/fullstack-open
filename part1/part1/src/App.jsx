import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      {<Header course={course} />}
      {<Content subjects={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]} />}
      <p>Number of exercises {<Total totalExercises={part1.exercises + part2.exercises + part3.exercises} />}</p>
    </div>
  )
}

export default App