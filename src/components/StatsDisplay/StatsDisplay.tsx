import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true, //lab doesn't specify default
}) => {
  //instead of three lines stacked like a list, show three little boxes side by side
  //  on a big screen, stacked on a phone, like the lab’s example (a label on top, a big number below).
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">Characters</p>
        <p className="text-2xl font-bold">{stats.characterCount}</p>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">Words</p>
        <p className="text-2xl font-bold">{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Reading Time</p>
          <p className="text-2xl font-bold">{stats.readingTime} min</p>
        </div>
      )}
    </div>
  );
};
