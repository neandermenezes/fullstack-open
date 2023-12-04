import Part from "./Part";

const Content = (props) => {
    const { parts } = props
    return (
        <div>
            {<Part subject={parts[0].name} exercises={parts[0].exercises} />}
            {<Part subject={parts[1].name} exercises={parts[1].exercises} />}
            {<Part subject={parts[2].name} exercises={parts[2].exercises} />}
        </div>

    )
}

export default Content;