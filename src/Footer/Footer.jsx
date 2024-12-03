import styles from './Footer.module.css'

function Button(props) {
  return(
    <div className={styles.footer}>
      <div className={styles.div}>
        <h5>© Bulacan Modernized Servic. All Rights Reserved</h5>
      </div>
    </div>
  )
}

export default Button