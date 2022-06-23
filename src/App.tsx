import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query{
    lessons {
    id
    slug
    title
    teacher {
      bio
      avatarURL
      name
      }
    }
  }`
  
function App() {

  const { data } = useQuery(GET_LESSONS_QUERY)

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  interface Lesson{
    id: string;
    title: string;
  }

  return (
    <Event/>
  )
}

export default App
