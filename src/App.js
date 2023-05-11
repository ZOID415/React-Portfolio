import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';


function App() {
  const [pages] = useState([
    {
      name: 'about me'
    },
    {
      name: 'contact'
    },
    {
      name: 'projects'
    },
    {
      name: 'resume'
    },
  ])
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return(

  <div>
    <Header>
      <Navigation>
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      </Navigation>
    </Header>
    <main>

    </main>
    <Footer>

    </Footer>
  </div>)
}
export default App;

// Tell tutor help navigate to which page