import React from 'react';
import type { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true, //lab doesn't specify default
}) => {
    return (
        <div className="w-full">
            <p> Characters: {stats.characterCount}</p>
            <p> Words: {stats.wordCount}</p>
            {showReadingTime && <p> Time: {stats.readingTime}</p>}
        </div>
    );
};
