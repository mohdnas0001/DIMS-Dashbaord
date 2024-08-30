// src/pages/Home.js
import React from 'react';
import Header from '../components/Home/Header';

const Home = () => {
  return (
      <section className="p-2 md:p-10">
          <Header/>
              <p>Welcome to the Home Page!</p>
    </section>
  );
};

export default Home;
