
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentA from './components/ContentA';
import ContentB from './components/ContentB'; // Corrected import statement
import Button from './components/SharedComponents';

function App() {
  return (
    <div>
      <Header />
      <main>
        <ContentA />
        <ContentB />
      </main>
      <Footer />
      <Button />
    </div>
  );
}

export default App;

