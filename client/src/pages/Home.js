<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";

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
                
                
            </div>
        </main>
    )
}
=======
import React from 'react';
import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

const Home = () => {
    return (
        <Fragment>
            <LoginModal />
        </Fragment>
    )
}

// const Home = () => {
//     const { loading, data } = useQuery(QUERY_THOUGHTS);
//     const { data: userData } = useQuery(QUERY_ME);
//     const thoughts = data?.thoughts || [];
  
//     const loggedIn = Auth.loggedIn();
  
//     return (
//       <main>
//         <div className="flex-row justify-space-between">
//           {loggedIn && (
//             <div className="col-12 mb-3">
//               <ThoughtForm />
//             </div>
//           )}
//           <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
//             {loading ? (
//               <div>Loading...</div>
//             ) : (
//               <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
//             )}
//           </div>
//           {loggedIn && userData ? (
//             <div className="col-12 col-lg-3 mb-3">
//               <FriendList
//                 username={userData.me.username}
//                 friendCount={userData.me.friendCount}
//                 friends={userData.me.friends}
//               />
//             </div>
//           ) : null}
//         </div>
//       </main>
//     );
//   };


export default Home;
>>>>>>> Stashed changes

export default Home;