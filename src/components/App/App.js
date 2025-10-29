import logo from '../../logo.svg';
import './App.css';
import { Members } from '../Member/Member';
import Header from '../header/header';
import MemberList from '../memberList/MemberList';
import Section from '../section/section';
import LuckyDrawBtn from '../luckyDrawButton/luckyDrawButton';
function App() {
  return (
    <div>
      <Header />
      <Section subHeading = "Take a chance, win a smile" subHeadingTwo="Your turn. Your luck."/>
      <MemberList />
    </div>
  );
}

export default App;
