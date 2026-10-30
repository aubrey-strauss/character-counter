//all the math happens in one place: CharacterCounter, the parent
// components/CharacterCounter/CharacterCounter.tsx
// STARTER SKELETON: the structure is here, the logic is yours to fill in.
// Change the type and prop names to match YOUR types/index.ts.

import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { CharacterCounterProps, TextStats } from '../../types';

export default function CharacterCounter({
  minWords = 25,
  maxWords = 300,
  targetReadingTime = 5,
}: CharacterCounterProps) {
  // ---------- 1. STATE ----------
  // TODO: one piece of state to hold the text the user types (starts as '')
const [text, setText] = useState('');

  // ---------- 2. EVENT HANDLER ----------
  // TODO: a function TextInput calls every time the text changes.
  // It receives the new text and saves it into your state.
  // Read as a sentence: “handleOnTextChange is a function that takes the new text and saves it.”
const handleOnTextChange = (newText: string) => {
    setText(newText);
};

  // ---------- 3. THE MATH ----------
  // TODO: characters  -> text.length
  // TODO: words       -> trim, split on spaces (/\s+/), 0 if empty
  // TODO: readingTime -> words / 200 (words per minute)
  // TODO: put them into one object that matches your TextStats type
  // const stats: TextStats = { ... };


  // ---------- 4. PROGRESS BAR ----------
  // TODO: percent = words / maxWords * 100, but never more than 100
  //       (hint: Math.min)


  // ---------- 5. WHAT SHOWS ON SCREEN ----------
  return (
    <div>
      {/* TODO: TextInput — pass it your handler function */}
      <TextInput />

      {/* TODO: StatsDisplay — pass it your stats object */}
      <StatsDisplay />

      {/* TODO: progress bar
          - an outer div (the gray track)
          - an inner div whose width is your percent, e.g. style={{ width: `${percent}%` }} */}

      {/* TODO: a message about minWords / maxWords
          (e.g. "Write at least X words" or "Over the limit") */}
    </div>
  );
}
