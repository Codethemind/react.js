
import PropTypes from 'prop-types'
function  Student(props){
    return(
        <div>
            <h1> name is {props.name}</h1>
        </div>
    )
}

Student.PropTypes={
    name:PropTypes.string,

}
Student.defaultProps={
    name:'guest'
}

export default Student