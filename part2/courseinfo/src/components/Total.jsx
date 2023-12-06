const Total = (props) => {
    const {parts} = props

    const totalExercises = parts.reduce((acc, cur) => acc + cur.exercises, 0)

    return (
        <p>{`Number of exercises ${totalExercises}`}</p>
    )
}

export default Total