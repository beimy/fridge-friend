import React, { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal";

const app_id = process.env.REACT_APP_EDAMAM_APP_ID;
const api_key = process.env.REACT_APP_EDAMAM_API_KEY;

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);

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

    return (
        <main>
            <div>
                <h1>Hi there</h1>
                {loading && <div>A moment...</div>}
                <form>
                    <label>Enter Food to search recipes by:
                        <input value={searchQuery} onInput={e => setSearchQuery(e.target.value)}/>
                    </label>
                    <button type="button" onClick={sendReq}>Send Request</button>
                </form>
                
                <LoginModal />
                
            </div>
        </main>
    )
}

export default Home;