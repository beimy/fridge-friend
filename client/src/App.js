import React, {useState} from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink }  from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import SinglePage from './pages/SinglePage';
import UserProfilePage from './pages/UserProfilePage';
import DonationsPage from './pages/DonationsPage';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [favRecipe, setFavRecipe] = useState({title: '', uri : '' });

  return (
    <ApolloProvider client={client}>
      <Router>
      <NavBar />
        <div className="flex-column justify-flex-start min-100-vh">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route 
              path='searchpage'
              element={<SearchPage
                favRecipe={favRecipe}
                setFavRecipe={setFavRecipe} />}
            />
             <Route 
              path='singlepage'
              element={<SinglePage
                favRecipe={favRecipe}
                setFavRecipe={setFavRecipe} />}
            />
             <Route 
              path='userprofilepage'
              element={<UserProfilePage />}
            />
             <Route 
              path='donations'
              element={<DonationsPage />}
            />
          </Routes>
        </div>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;