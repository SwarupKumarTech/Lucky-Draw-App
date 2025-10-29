import './MemberList.css';
import { Members } from '../Member/Member';
import LuckyDrawBtn from '../luckyDrawButton/luckyDrawButton';
import React from 'react';
import Confetti from 'react-confetti';
const people = [
    { name: "Swarup", city: "Hyderabad" },
    { name: "John", city: "New York" },
    { name: "Amit", city: "Mumbai" },
    { name: "Sara", city: "Los Angeles" },
    { name: "Ling", city: "Beijing" },
    { name: "Carlos", city: "Madrid" },
    { name: "Fatima", city: "Dubai" },
    { name: "Olga", city: "Moscow" },
    { name: "Liam", city: "Toronto" },
    { name: "Emma", city: "London" },
    { name: "Noah", city: "Sydney" },
    { name: "Ava", city: "Berlin" },
    { name: "Sophia", city: "Rome" },
    { name: "Isabella", city: "Paris" },
    { name: "Mia", city: "Amsterdam" },
    { name: "Amelia", city: "Dublin" },
    { name: "Harper", city: "Copenhagen" },
    { name: "Evelyn", city: "Vienna" },
    { name: "Abigail", city: "Prague" },
    { name: "Ella", city: "Budapest" },
    { name: "Scarlett", city: "Brussels" },
    { name: "Grace", city: "Helsinki" },
    { name: "Chloe", city: "Stockholm" },
    { name: "Victoria", city: "Oslo" },
    { name: "Riley", city: "Zurich" },
    { name: "Aria", city: "Lisbon" },
    { name: "Lily", city: "Athens" },
    { name: "Natalie", city: "Edinburgh" },
    { name: "Hannah", city: "Glasgow" },
    { name: "Luna", city: "Seville" },
    { name: "Sofia", city: "Valencia" }

  ];
function MemberList() {
    const [luckyPerson, setLuckyPerson] = React.useState("");
    const [showCelebration, setShowCelebration] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    function pickPerson() {
        setIsLoading(true);
        const randomNumber = Math.floor(Math.random() * people.length);
        const person = people[randomNumber];
        const luckyMessage = `${person.name} from ${person.city} won the lucky draw..!😊`;
        setTimeout(function() {
            setLuckyPerson(luckyMessage);
            setIsLoading(false);
            setShowCelebration(true);
        }, 5000); 
    }
    return (
        <>
            {showCelebration && <Confetti numberOfPieces={1000}/>}
            <div className="Members-list">
                {people.map(function(member){
                return <Members key={member.name} name={member.name} city={member.city} />;
                })}
            </div>
            <div className='flex-center'>
                {isLoading && <h2 className='loading'>Loading....</h2>}
                <h2>{luckyPerson}</h2>
                <LuckyDrawBtn text="Lucky Draw" onClick={pickPerson}/>
            </div>
        </>
    )
}
export default MemberList;