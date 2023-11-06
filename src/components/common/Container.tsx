import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
 
import { MainNavigation } from './MainNavigation'
import { Footer } from './Footer'
 

export const Container: FC<any> = ({ children, ...customMeta }) => {
  const router = useRouter()

 

  return (
    <>
      <Head>
 
      
      </Head>
      <>
        <MainNavigation />
        <div className="flex min-h-screen flex-col justify-between">
          <main className="relative pt-16" style={{ scrollPaddingTop: '150px' }}>
            {children}
          </main>
          <Footer />
        </div>
      </>
    </>
  )
}
