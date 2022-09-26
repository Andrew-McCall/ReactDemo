import PropTypes from 'prop-types';

const Message = ({name, isGreeting}) => {
    
    // (props) => {
    // const isGreeting = props.isGreeting;
    // const name = props.name;

    if (isGreeting){
        return (<>
            <h1 className="greeting">Hello World,</h1>
            {name}
        </>);
    }else{
        return (<>
            <h1 className="greeting">Goodbye,</h1>
            <h2>{name}</h2>
            <p>Nice seeing you!</p>
        </>);
    }

}

Message.propTypes = {
    isGreeting: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default Message;