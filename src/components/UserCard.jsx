import styles from "./Card.module.scss"
import PropTypes from "prop-types"

export const UserCard = ({ user, setSingle }) => {
 return (
  <div className={styles.root}>
   <button onClick={() => setSingle(false)} className={styles.btn}>Go Back</button>
   <div className={styles.content}>
    <p><span>Name:</span> {user?.name}</p>
    <img
     className={styles.image}
     src={user?.imageUrl}
     alt="placeholder pic"
    />
    <p><span>Email: </span>{user?.email}</p>
    <p><span>Username:</span> {user.username}</p>
    <p><span>Phone Number:</span> {user.phone}</p>
    <p><span>Website:</span> {user.website}</p>

    <h5>Company Details</h5>

    <p><span>Name:</span> {user?.company?.name}</p>
    <p><span>Address:</span> {`${user?.address?.city}-${user.address.street}-${user.address.suite}`}</p>
   </div>
  </div>
 )
};

UserCard.propTypes = {
 user: PropTypes.object,
 setSingle: PropTypes.func
}