import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handler = async () => {
    const response = await fetch('/api/hello')

    if (response.ok) {
      const result = await response.json()
      console.log('result', result)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handler}>click</button>
    </div>
  )
}