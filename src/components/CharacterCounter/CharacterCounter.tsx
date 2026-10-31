//all the math happens in one place: CharacterCounter, the parent
// components/CharacterCounter/CharacterCounter.tsx
// STARTER SKELETON: the structure is here, the logic is yours to fill in.
// Change the type and prop names to match YOUR types/index.ts.
// Add useCallback to handler
import { useState, useCallback } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

export default function CharacterCounter({
  minWords = 25,
  maxWords = 300,
  targetReadingTime = 5,
}: CharacterCounterProps) {
  // ---------- 1. STATE ----------
  // TODO: one piece of state to hold the text the user types (starts as '')
  const [text, setText] = useState("");

  // ---------- 2. EVENT HANDLER ----------
  // TODO: a function TextInput calls every time the text changes.
  // It receives the new text and saves it into your state.
  // Read as a sentence: “handleOnTextChange is a function that takes the new text and saves it.”
  const handleOnTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []);

  // ---------- 3. THE MATH ----------
  // Read it as: “characterCount is the length of the text.”
  const characterCount = text.length;
  // TODO: words -> trim, split on spaces (/\s+/), 0 if empty
  // A regular if statement can’t sit on the right side of =. For a choice inside one line, use the ternary.
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // TODO: readingTime
  // Read it as: “readingTime is the word count divided by 200.”
  // 200 wpm = common average adult reading speed
  const readingTime = wordCount / 200;

  // TODO: put them into one object that matches your TextStats type
  // Read each line as “the characterCount label holds my characterCount variable.”
  const stats: TextStats = { characterCount, wordCount, readingTime };

  // ---------- 4. PROGRESS BAR ----------
  // TODO: percent: if someone types more than maxWords, the answer goes over 100.
  // A bar at 150% would stick out past its track. So cap it at 100.
  const percent = Math.min((wordCount / maxWords) * 100, 100);

  // ---------- 5. WHAT SHOWS ON SCREEN ----------
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Character Counter</h1>
      <TextInput onTextChange={handleOnTextChange} />
      {/* TODO: StatsDisplay — pass it your stats object */}
      <StatsDisplay stats={stats} showReadingTime={true} />
      {/* TODO: progress bar
          - an outer div (the gray track)
          - an inner div whose width is your percent, e.g. style={{ width: `${percent}%` }} */}
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${wordCount > maxWords ? "bg-red-600" : "bg-green-600"}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-xs text-gray-500">
        Min: {minWords} | Max: {maxWords}
      </p>

      {/* TODO: a message about minWords / maxWords
          (e.g. "Write at least X words" or "Over the limit") */}
      <p className="text-sm text-gray-600">
        {wordCount < minWords
          ? `Write at least ${minWords} words.`
          : wordCount > maxWords
            ? `Over the limit! Max is ${maxWords} words.`
            : `Nice — you're within ${minWords}–${maxWords} words.`}
      </p>
      <p className="text-sm text-gray-600">
        Target reading time: {targetReadingTime} min{" "}
        {readingTime > targetReadingTime ? "⚠️ Over target" : "✅ Under target"}
      </p>
    </div>
  );
}
