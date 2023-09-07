import React from 'react'
import Section from './section'
import styles from "./section.module.scss"
import SectionTwo from './sectiontwo'
import SectionThree from './sectionthree'

const Main = () => {
  return (
    <section>
        <Section />
        <SectionTwo />
        <SectionThree />
    </section>
  )
}

export default Main