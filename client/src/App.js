import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink }  from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'

<<<<<<< Updated upstream
import Home from './pages/Home'
=======
// import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import SinglePage from './pages/SinglePage';
// import UserProfilePage from './pages/UserProfilePage';
import DonationsPage from './pages/DonationsPage';
>>>>>>> Stashed changes

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Routes>
            {/* <Route
              path='/'
              element={<Home />}
<<<<<<< Updated upstream
=======
            /> */}
            <Route 
              path='searchPage'
              element={<SearchPage
                favRecipe={favRecipe}
                setFavRecipe={setFavRecipe} />}
            />
             <Route 
              path='SinglePage'
              element={<SinglePage
                favRecipe={favRecipe}
                setFavRecipe={setFavRecipe} />}
            />
             {/* <Route 
              path='UserProfilePage'
              element={<UserProfilePage />}
            /> */}
             <Route 
              path='donations'
              element={<DonationsPage />}
>>>>>>> Stashed changes
            />
          </Routes>
        </div>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;