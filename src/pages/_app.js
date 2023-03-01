import { Header } from '@/components/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <div className='w-[90%] mx-auto'>
    <Component {...pageProps} />

    </div>
    </>
    )
}
