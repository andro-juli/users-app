import React from 'react'
import { UserCard } from "./UserCard"
import { useUsers } from '../hooks/useUser'
import styles from "./Users.module.scss"


export const UsersList = () => {
  const [single, setSingle] = React.useState(false)
  const [singleView, setSingleView] = React.useState({})

  const { users, photos } = useUsers()


  function viewUser(user) {
    const img = photos?.find((el) => { return el.id === user.id })
    const new_user = { ...user, imageUrl: img?.url }
    setSingleView(new_user)
    setSingle(!single)
  }


  return (
    <main
      className={styles.base}
    >
      <div className='container'>
        {
          single ? <UserCard user={singleView} setSingle={setSingle} /> :
            <div className={styles.usersList}>
              <>
                <h1 className='title'>Users List</h1>
                <h4 className='subtitle'>Click on a user to view their details</h4>
                {
                  users.map((user) => {
                    return (
                      <div key={user.id} className={styles.usersListItem} onClick={() => viewUser(user)}>
                        <p className={styles.usersListItemName}>{user.name}</p>
                      </div>
                    )
                  })

                }
              </>
            </div>
        }
      </div>
    </main>
  )

}