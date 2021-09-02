import Button from './Button'

const Header = (props) => {
    const onClick = (e) => {
        console.log(e.target);
    }

    return(
        <header className="header">
            <h1 style={{ color: 'black' }}>{props.title}</h1>
            <Button color="green" text="Add" onClick={onClick} />
        </header>

    ) 
}

export default Header