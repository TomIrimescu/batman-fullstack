// @ts-nocheck
import React from 'react';
import axios from "axios";
import { useQuery } from "react-query";
import dotenv from "dotenv";
dotenv.config();

const endpoint = "http://localhost:4000/graphql/";

const GET_ALL_USERS = `
  {
    allUsers {
      id
      email
      posts {
        title
        content
        published
        viewCount
      }
    }
  }
`

// const GET_FEED = `
//   {
//     feed {
//       id
//       title
//       content
//       published
//       author {
//         id
//         name
//         email
//       }
//     }
//   }
// `

const User = () => {

  const { data, isLoading, error } = useQuery("queryUsers", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: GET_ALL_USERS
      }
    }).then(response => response.data.data);
  });

  if (isLoading) return <>"Loading..."</> ;
  if (error) return <><pre>{error.message}</pre></>;  

  return (
    <table>
      <thead>
        <tr>
          <th className="App-title"></th>
          <th className="App-title"></th>
          <th className="App-title">GraphQL data</th>
        </tr>
      </thead>
      <tbody>
        {data && data.allUsers.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>&nbsp;</td>
            <td>{user.email}</td>           
          </tr>
        ))}
      </tbody>
    </table>    
  )
}

export default User;