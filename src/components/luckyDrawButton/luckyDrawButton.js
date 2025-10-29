import './luckyDrawButton.css';
function LuckyDrawBtn(props) {
    const {text,onClick} = props;
    return (
        <div className="luckyDrawContainer">
            <button className='luckydrawBtn' onClick={onClick}>{text}</button>
        </div>
    )
}
export default LuckyDrawBtn;