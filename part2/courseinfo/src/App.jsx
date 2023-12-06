import Content from "./components/Content"
import Course from "./components/Course"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      {<Course course={course} />}
    </div>
  )
}

export default App