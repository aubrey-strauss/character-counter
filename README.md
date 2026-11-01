# Character Counter

This app lets you type text and see real-time stats about it: character count, word count, and reading time.

## How to Run

```bash
npm install
npm run dev
```

Cmd + click the localhost link in the terminal to open it.

## Tech Used

React, TypeScript, Vite, Tailwind CSS

## Components

### TextInput

The text box. Every time you type, it sends the text up to the parent.

- `onTextChange` (required): function that gets the new text
- `placeholder` (optional): defaults to "Start typing..."
- `initialValue` (optional): defaults to empty

```tsx
<TextInput onTextChange={handleOnTextChange} />
```

### StatsDisplay

Shows the character count, word count, and reading time.

- `stats` (required): object with characterCount, wordCount, and readingTime
- `showReadingTime` (optional): defaults to true

```tsx
<StatsDisplay stats={stats} showReadingTime={true} />
```

### CharacterCounter

The parent. It holds the text in state, does the math, and passes everything down. It also shows a progress bar and messages about the word goal and reading time.

- `minWords` (optional): defaults to 25
- `maxWords` (optional): defaults to 300
- `targetReadingTime` (optional): defaults to 5 minutes

```tsx
<CharacterCounter />
```

## How They Work Together

TextInput sends the text up to CharacterCounter with the `onTextChange` callback. CharacterCounter saves it in state, recalculates the stats, and sends them down to StatsDisplay as props.

## How the Stats Are Calculated

- Characters: length of the text
- Words: trim the text and split on spaces (0 if empty)
- Reading time: words ÷ 200 (average reading speed), rounded up to the next minute
- Progress bar: words ÷ maxWords, capped at 100%

## Edge Cases

- An empty box or only spaces counts as 0 words
- Extra spaces between words don't add extra words
- Going over the max turns the bar red and shows a warning, and the bar stops at 100%
