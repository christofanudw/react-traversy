import Button from './Button'

const Header = ({ title, addButton, formVisible }) => {
    return(
        <header className="header">
            <h1 style={{ color: 'black' }}>{title}</h1>
            <Button color={`${formVisible ? 'red' : 'green'}`} text={`${formVisible ? 'Cancel' : 'Add'}`} onClick={addButton} />
        </header>

    ) 
}

export default Header