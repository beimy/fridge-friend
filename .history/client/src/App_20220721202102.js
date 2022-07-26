import React, {useState} from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink }  from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'

import Home from './pages/Home'

const [data, setData] = useState([]);
const [loading, setLoading] = useState(null);
const [error, setError] = useState(null);
const [searchQuery, setSearchQuery] = useState('');

const app_id = process.env.REACT_APP_EDAMAM_APP_ID;
const api_key = process.env.REACT_APP_EDAMAM_API_KEY;

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache
});

function sendReqBtn(sendReq) {
  return <button type="button" onClick={sendReq}>Send Request</button>
}

function sendReq() {
  setLoading(true);

  const getData = async () => {
      try {
        const response = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${app_id}&app_key=${api_key}`
        );
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: Status ${response.status}`
            );
        }
        let data = await response.json();
        setData(data);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData()
}


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Routes>
            <Route
              path='/'
              element={<Home
                data={data}
                setData={setData}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sendReq={sendReq()}
                 />}
            />
          </Routes>
        </div>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;