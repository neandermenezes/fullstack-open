/* eslint-disable react/prop-types */
const StatisticsLine = (props) => {
    const { text, value } = props

    return (
        <tr>
            <td>{text} </td> <td> {value}</td>
        </tr>

    )
}

export default StatisticsLine