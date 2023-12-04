/* eslint-disable react/prop-types */
const Statistics = (props) => {
    const {statistics} = props

    return (
        <div>
            <p>all {statistics[0]}</p>
            <p>average {statistics[1]}</p>
            <p>positive {statistics[2]} %</p>
        </div>
    )
}

export default Statistics