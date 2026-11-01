## Reflections

**How did you handle state updates when the text changed?**
I kept the text in state in CharacterCounter. TextInput calls `onTextChange` when you type, and the handler saves it with `setText`. Then the stats recalculate from the new text. I used `useCallback` on the handler so it doesn't get re-created every time.

**What considerations did you make when calculating reading time?**
I used 200 words per minute since that's about average. The result came out as decimals like 0.135, so I rounded up with `Math.ceil` so it shows "1 min" instead of "0 min."

**How did you ensure the UI remained responsive during rapid text input?**
The math is simple, so it's fast. I calculate the stats from the text each time instead of storing them in separate state, and `useCallback` keeps the handler from being re-made.

**What challenges did you face when implementing the statistics calculations?**
Word count was tricky because an empty box was counting as 1 word and extra spaces were adding words. Trimming and splitting on `/\s+/` fixed it. I also had trouble connecting the components, like mixing up types and values, getting imports right, and using `return {` instead of `return (`, which made the page go blank. Tailwind was new to me too.
