import React from 'react';
import { CreateCharacterForm } from 'components/pages/CreateCharacterForm';

export const App = () => {
  return (
    <div>
      <CreateCharacterForm onSubmit={(result) => { alert(JSON.stringify(result))}} />
    </div>
  );
};
