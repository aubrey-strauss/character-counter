import React from 'react';
import type { StatsDisplayProps} from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true, //lab doesn't specify default
}) => {
  return (
    <div className="w-full"></div>
  );
};