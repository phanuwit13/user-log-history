import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (<div>
    <Head>
      <title>ระบบตรวจสอบประวัติการเข้าสู่ระบบ</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
