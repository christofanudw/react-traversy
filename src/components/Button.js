import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>{text}</button>
    ) 
}

Button.defaultProps = {
    color: "steelBlue"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
} 

export default Button