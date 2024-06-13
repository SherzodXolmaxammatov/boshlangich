import './Employe.css'

function Employee(props) {
  return (<>
    <h3>employee's name is {props.name}</h3>
    {/* <p>{props.role? props.role: "No Role..."}</p> */}
    {props.role? <p className="role" >{props.role}</p>:<p className="norole">no role</p>}
    </>
  )
}

export default Employee