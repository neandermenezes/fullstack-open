/* eslint-disable react/prop-types */
const Button = (props) => {
    const { text, onClick } = props

    return (
        <button type="button" onClick={onClick}>{text}</button>
    )
}

export default Button