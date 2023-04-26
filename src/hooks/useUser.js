import { getUserImages, getUsers } from "../api/user"
import React from "react"


function useUsers() {
  const [users, setUsers] = React.useState([])
  const [photos, setPhotos] = React.useState([])


  const fetchUsers = async () => {
    const result = await getUsers()
    const photos = await getUserImages()
    setUsers(result.data)
    setPhotos(photos.data)
  }
  React.useEffect(() => {
    fetchUsers()
  }, [])


  return {
    users,
    photos
  }
}

export { useUsers }