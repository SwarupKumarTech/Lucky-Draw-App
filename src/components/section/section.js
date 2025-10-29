import './section.css';
function Section(props) {
    const {subHeading, subHeadingTwo} = props ;
    return (
        <div className="subHeading">
            <h2>{subHeading}</h2>
            <p>{subHeadingTwo}</p>
        </div>
    )
}
export default Section;