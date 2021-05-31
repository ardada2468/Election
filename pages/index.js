import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typing from 'react-typing-animation';
import Card from "../components/Card";
import TextLoop from "react-text-loop"

export default function Home() {
  const name = "name"
  const position = "position"
  return (
    <div className={styles.container}>

      <Head>
        <title>Vote for {name}</title>
        <meta name={name} content="Trumbull High School Elections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

          <div className={"space"}/>
          <div>
              <Typing><h1 className={"Title"}>{"Vote for " + name + " for " + position}</h1></Typing>
          </div>

          <div className="LandingCardBody">
              <div className="LandingCardCard">
                  <img
                      src={"https://louisville.edu/enrollmentmanagement/images/person-icon/image"}
                      alt="Arnav Dadarya"
                      className="birthday"
                  />
                  <div className="LandingCardText">
                      <span className="FlowingText">

                          <h1>
                              <Typing>I am  </Typing>
                              <TextLoop interval={800} springConfig={{ stiffness: 150, damping: 15 }}>
                                  {[
                                      <a> Honest </a>,
                                      <a> Smart </a>,
                                      <a> Kind </a>,
                                      <a> Other </a>,
                                      <a> Other</a>,
                                      <a> other </a>,
                                      <a> Other</a>,
                                  ]}
                              </TextLoop>
                              <a>  </a>
                          </h1>
                      </span>

                  </div>
              </div>
          </div>
          <h2>Why should you vote for me?</h2>
          <div className={"container"}>
              <Card Title={"ID 0"} Content={"SubID 0"} StyleNumb={0} />
              <Card Title={"ID 1"} Content={"SubID 1"} StyleNumb={1} />
              <Card Title={"ID 2"} Content={"SubID 2"} StyleNumb={2} />
              <Card Title={"ID 3"} Content={"SubID 3"} StyleNumb={0} />
              <Card Title={"ID 4"} Content={"SubID 4"} StyleNumb={1} />
              <Card Title={"ID 5"} Content={"SubID 5"} StyleNumb={2} />

          </div>
      </main>

      <footer className={styles.footer}>
          <a>Built by Arnav Dadarya</a>
      </footer>
    </div>
  )
}
