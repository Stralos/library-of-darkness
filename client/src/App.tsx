import React from 'react';
import { CreateCharacterForm } from 'components/pages/CreateCharacterForm';

function App() {
  return (
    <div>
      <div>Create Character form</div>
      <CreateCharacterForm onSubmit={alert} />
    </div>
  );
}

export default App;
