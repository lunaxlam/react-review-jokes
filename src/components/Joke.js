

function Joke(props) {
    return(
        <div className="container">
            {props.setup && <h1>Set-up: {props.setup}</h1>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke;