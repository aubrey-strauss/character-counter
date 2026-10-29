// components/TextInput/TextInput.tsx
import React from 'react';
import type { TextInputProps } from '../../types';

export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing...',
    initialValue = ''
}) => {
    return (
        <div className="w-full">
            <label htmlFor="text-input" className="sr-only"> {/* settings are done, content starts here*/}
                Text to count
            </label> {/* for tags that show text*/}
            <textarea id="text-input" //for tags with nothing inside
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                defaultValue={initialValue}
                // call the parent and tell it what’s in the box now
                onChange={(e) => onTextChange(e.target.value)} // in the event, find the target, and get its value
                rows={6}
            />
        </div>
    );
};
