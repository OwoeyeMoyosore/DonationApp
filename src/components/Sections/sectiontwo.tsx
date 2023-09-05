import styles from "./section.module.scss";
import { ReactComponent as Frame1 } from "../../assets/svgs/Frame1.svg";

const Frame2 = require("../../assets/svgs/doante.png");
const Frame3 = require("../../assets/svgs/testify.png");

const SectionTwo = () => {
  return (
    <section>
      <main className={styles.main_two}>
        <div>
          <p className={styles.how}>HOW DONATING WITH AKINYAK WORKS</p>
          <p className={styles.simple}>Simple, transparent & joyful</p>
        </div>
      </main>
      <main className={styles.phones}>
        <div className={styles.image}>
          <Frame1 />
          <p className={styles.sub}>
            Find Stories and individuals that inspire you, that you can directly
            help
          </p>
        </div>

        <div className={styles.image}>
          {/* <Frame2 /> */}
          <img src={Frame2} />
          <p className={styles.sub}>Support people and causes you care about</p>
        </div>
        <div className={styles.image}>
          <img src={Frame3} />
          <p className={styles.sub}>
            See the difference you make with video updates and share int the joy
            you create
          </p>
        </div>
      </main>
    </section>
  );
};

export default SectionTwo;
