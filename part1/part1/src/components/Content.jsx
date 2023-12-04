import Part from "./Part";

const Content = (props) => {
    console.log(props.subjects[0])
    return (
        <div>
            {<Part subject={props.subjects[0]} exercises={props.exercises[0]} />}
            {<Part subject={props.subjects[1]} exercises={props.exercises[1]} />}
            {<Part subject={props.subjects[2]} exercises={props.exercises[2]} />}
        </div>

    )
}

export default Content;