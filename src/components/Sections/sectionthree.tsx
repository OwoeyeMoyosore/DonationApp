import CustomButton from "../../custom/Button/button";
import styles from "./section.module.scss";

import image from "../../assets/svgs/testify.png";
import rect from "../../assets/rectangle-7.png";
import rect2 from "../../assets/Rectangle-8.png"
import {ReactComponent as Checkbox} from "../../assets/svgs/checkbox.svg"

const SectionThree = () => {
  return (
    <section className={styles.section_three}>
      <main className={styles.main_three}>
        <div className={styles.container}>
          
          <div className={styles.first}>
            <img src={rect} alt="rectangle" />
            <div className={styles.group}>
              <p className={styles.help}>
                Help Kakuku community with good water supply
              </p>
              <p className={styles.future}>
                Tanya Ambadu who is a widow and mother of three children is
                doing a wonderful job. She would like help to set up a business
                so she can provide a better future for her Children
              </p>
            </div>

          </div>


          <div className={styles.slanted_image_container}>
            <img src={rect2} alt="Slanted Image" />
            <div className={styles.group}>
              <p className={styles.help}>
                Help Kakuku community with good water supply
              </p>
              <p className={styles.future}>
                Tanya Ambadu who is a widow and mother of three children is
                doing a wonderful job. She would like help to set up a business
                so she can provide a better future for her Children
              </p>

              <p style={{justifyContent:"space-between", display:"flex"}}>
                <span>$700 raised</span>
                <span>100% funded</span>
              </p>

              <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button className={`${styles.donate}`}>Donate</button>
              </div>
            </div>
               
            </div>

          
          {/* <div className={styles.red_rectangle}></div> */}
        </div>
      </main>

      <main className={styles.second}>
        <div>
        <p className={styles.see}>See The Joy You Create</p>
        <p className={styles.para_two}>Give directly to people in need and get a video update showing your impact.</p>
        <p className={styles.para_two}>Your donation will have a transformational impact -  an impact you will get to see.</p>
        
        <span style={{display:"flex"}}>
            <Checkbox />
            <p>Donations securely processed by Stripe</p>
        </span>
    
        <span style={{display:"flex"}}>
            <Checkbox />
            <p>Video Update with every donation</p>
        </span>

        <span style={{display:"flex"}}>
            <Checkbox />
            <p>Vetted on-the-ground partners</p>
        </span>
        <CustomButton width="12rem">View Projects</CustomButton>
        </div>
        
      </main>
    </section>
  );
};

export default SectionThree;
