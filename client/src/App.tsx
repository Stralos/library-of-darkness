import React from 'react';
import { CreateCharacterForm } from 'components/pages/CreateCharacterForm';

export const App = () => {
  return (
    <div>
      <div>Create Character form</div>
      <CreateCharacterForm onSubmit={alert} />
    </div>
  );
};
