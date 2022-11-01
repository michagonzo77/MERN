import './App.css';
import { useState } from "react";

import flashcardsData from "./data/flashcards.json"

function App() {
  const [flashcards, setFlashcards] = useState(flashcardsData);

  // Form state:
  const [category, setCategory] = useState({});
  const [front, setFront] = useState({});
  const [back, setBack] = useState({});
  

  const handleFlipCardClick = (event, selectedIdx) => {
    const updatedFlashcards = flashcards.map((card, i) => {
      if (i === selectedIdx){
        card.flipped = !card.flipped;
      }
      return card;
    })
    setFlashcards(updatedFlashcards);
  }

  const handleNewCardSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      // long-form is key: value
      category: category,
      front: front,
      // sorthand can be used if key name matches variable
      back,
      flipped: false,
    };

    // Spread all the current flashcards into a new arrray,and then add the 1 new card.
    const updatedCards = [newCard, ...flashcards];
    setFlashcards(updatedCards);

    setCategory('');
    setFront('');
    setBack('');
  };

  const handleDeleteClick = (event, idxToRemove) => {
    const filteredFlashcards = flashcards.filter((card, i) => {
      return idxToRemove != i;
    });
    setFlashcards(filteredFlashcards);
  }

  return (
    <div className="App">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
      </header>

    <form onSubmit={(e) => {
      handleNewCardSubmit(e)
    }}>
      <div>
        <label>Category: </label>
        <input onChange={(e) => {
          setCategory(e.target.value)
          }}
          type="text"
          value=""
        ></input>
      </div>

      <div>
        <label>Category: </label>
        <input onChange={(e) => {
          setFront(e.target.value)
          }}
          type="text"
          value=""
        ></input>
      </div>

      <div>
        <label>Category: </label>
        <input onChange={(e) => {
          setBack(e.target.value)
          }}
          type="text"
          value=""
        ></input>
      </div>
      <button>Add</button>
    </form>

      <hr />

      <main className='flex-row flex-wrap'>
        {flashcards.map((card, idx) => {
          const classes = ['card']

          if (card.flipped) {
            classes.push('flipped')
          }

          return (
            <section
              // id={`card-${idx}`}
              onClick={(event) => {
                handleFlipCardClick(event, idx);
              }}
              key={idx} 
              className={classes.join(' ')}
            >
            <h3>{card.category}</h3>

            <p className="front">{card.front}</p>
            <p className="back">{card.back}</p>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
