import StatisticsLine from "./StatisticLine"

/* eslint-disable react/prop-types */
const Statistics = (props) => {
    const { statistics, good, neutral, bad } = props

    return (
        <table>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>

            <StatisticsLine text="all" value={statistics[0]}/>
            <StatisticsLine text="average" value={statistics[1]}/>
            <StatisticsLine text="positive" value={statistics[2]}/>
        </table>
    )
}

export default Statistics