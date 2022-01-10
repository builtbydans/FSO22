import React, { useState } from 'react';

const Header = ({ text }) => <h2>{text}</h2>;

const Anecdote = ({ anecdotes, votes }) => {
  return (
    <div>
      <p>{anecdotes}</p>
      <p>has {votes} votes.</p>
    </div>
  )
};

const MostVoted = ({ anecdote, votes }) => {
  const highestIndex = Math.max(...votes);
  console.log(highestIndex);
  const mostVotedIndex = votes.indexOf(highestIndex);
  const mostVoted = anecdote[mostVotedIndex];

  return (
    <div>
      <p>{mostVoted}</p>
      <p>has {highestIndex} votes.</p>
    </div>
  )
}

const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
};
  
const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));

  const handleNextClick = () => { 
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  const handleVoteClick = () => {
    const totalVotes = [...votes];
    totalVotes[selected] += 1;
    setVotes(totalVotes);
  }

  return (
    <div>
      <Header text="Anecdote Of The Day" />
      <Anecdote anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick ={handleVoteClick} name="vote" />
      <Button onClick={handleNextClick} name="next anecdote" />

      <Header text="Anecdote With Most Votes" />
      <MostVoted anecdote={anecdotes} votes={votes} />
    </div>
  )
}

export default App