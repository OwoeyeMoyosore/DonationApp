import CustomButton from "../../custom/Button/button"
import styles from "./section.module.scss"

const Section = () => {
  return (
   <section  className={styles.section_one}>
    <main className={styles.main_one}>
      <p className={styles.para}>Transforming Lives One Donation At a Time</p>
      <p className={styles.para_two}>Want to be a part of a community that is changing the world?</p>
      <p className={styles.para_two}>AkinYak is a giving platform for those who care about the impact of their donation.</p>
      <CustomButton width="12rem">View Projects</CustomButton>
    </main>
    <main>
    {/* <video controls width="481" height="406">
        <source src="https://www.youtube.com/watch?v=ijK8vrODODI" type="video/mp4" />
      </video> */}

      <iframe
        src="https://www.youtube.com/embed/ijK8vrODODI"
        title="YouTube Video"
        allowFullScreen
        
        className={styles.frame}
      ></iframe>
    </main>
   </section>
  )
}

export default Section