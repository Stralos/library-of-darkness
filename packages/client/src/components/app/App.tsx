import React from 'react';
import { CreateCharacterForm } from 'components/pages/CreateCharacterForm';

export const App = () => {
  const character = {
    name: 'Peter',
    attributes: {},
    skills: {},
    aspirations: [],
    merits: [{ text: 'Resources', dots: 3 }],
  };
  return (
    <div>
      <CreateCharacterForm
        character={character}
        onSubmit={(result) => {
          alert(JSON.stringify(result));
        }}
      />
    </div>
  );
};
