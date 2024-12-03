import styles from './Card.module.css'

function Card(props) {

  return(
    <div key={props.key} className={styles.card}>
      <img className={styles.cardimage} src={props.src} alt="profile picture"></img>
      <h2 className={styles.cardtitle}>{props.name}</h2>
      <p className={styles.cardtext}>{props.description}</p>
    </div>
  )
}

export default Card