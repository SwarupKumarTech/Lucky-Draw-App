import './Member.css';
export function Members(props) { // object destructuring 
    const memberName = props.name;
    const memberCity = props.city;
    return (
        <div className="Member-card">
            <h2 className='name'> {memberName} </h2>
            <p className="city"> {memberCity} </p>
        </div>
    )
};