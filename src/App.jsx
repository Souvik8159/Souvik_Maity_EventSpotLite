import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import EventList from './Page/EventList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <EventList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
