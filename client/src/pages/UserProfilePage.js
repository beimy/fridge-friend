import React, { Component } from 'react';
import { QUERY_RECIPES, QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import UserProfile from 'react-user-profile';

 
const UserProfilePage = () => {

  const {loading, error, data} = useQuery(QUERY_ME);

  // const photo = '/'
  // const userName = 'Harvey Specter'
  // const location = 'New York, USA'

  // const comments = [
  //   {
  //     id: '1',
  //     photo: '/',
  //     userName: 'Mike Ross',
  //     content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
  //     createdAt: 1543858000000
  //   }
  // ];

    

    if(loading) return 'Loading';
    if(error) return `Error! ${error.message}`;
    console.log(data.me.favRecipes);
 
    return (
      <div style={{ margin: '0 auto', width: '100%' }}>
        <ul>
          {data.me.favRecipes.map(receipe => (
            <li>{receipe.title}</li>
          ))}
        </ul>

      </div>
    )

}
 
export default UserProfilePage;