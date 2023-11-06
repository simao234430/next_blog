 
import { Container } from '@/components/common/Container'
import { type CodeSnippets, HowItWorks, codeSnippets } from '@/components/common/HowItWorks'
import { FAQ } from '@/components/landing-page/FAQ'
import { Features } from '@/components/landing-page/Features'
import { Hero } from '@/components/landing-page/Hero'
import { Playground } from '@/components/landing-page/Playground'
import { Support } from '@/components/landing-page/Support'
import { Testimonials } from '@/components/landing-page/Testimonials'
import { Tweets } from '@/components/landing-page/Tweets'
import { promiseAllProperties, mapObjectValues } from '@/utils/object'
import Image from 'next/image'
import { ColorScheme, snippetToHtml } from '../utils/syntax-highlighting'
import { useColorScheme } from '../components/ColorSchemeContext'
import React, { useEffect, useState } from 'react'
const getUsedByCountWithFallback = async () => {
  try{  return 88699

  } catch (e) {
    console.log(`Error occurred while fetching used by count: ${e}`)

    // Hardcode last known number as fallback
    return 300
  }
}
export const getStaticProps: GetStaticProps = async ({ }) => {
  console.time('getStaticProps /')
  const { preprocessedCodeSnippets, usedByCount } = await promiseAllProperties({
    preprocessedCodeSnippets: promiseAllProperties<PreprocessedCodeSnippets>({
      light: htmlForCodeSnippets('light'),
      dark: htmlForCodeSnippets('dark'),
    }),
    usedByCount: getUsedByCountWithFallback(),
  })
  console.timeEnd('getStaticProps /')
  return { props: {preprocessedCodeSnippets,  usedByCount  } }
}

const Page: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({preprocessedCodeSnippets, usedByCount }) => {
  
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (preferredColorScheme === 'system') {
      setColorScheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } else {
      setColorScheme(preferredColorScheme)
    }
  }, [preferredColorScheme])
  return (
 
  <Container>
    <Hero/>
    <Support/>
    <Testimonials usedByCount={usedByCount} />
    <Features/>      
    <HowItWorks codeSnippets={preprocessedCodeSnippets[colorScheme]} />
      <Playground />
      <FAQ />
      <Tweets />
  </Container>
 
  
 
  )
}
export default Page


export type PreprocessedCodeSnippets = Record<ColorScheme, CodeSnippets>

export const htmlForCodeSnippets = (colorScheme: ColorScheme): Promise<CodeSnippets> =>
  promiseAllProperties(
    mapObjectValues(
      codeSnippets,
      (_key, snippets) =>
        Promise.all(
          snippets.map(({ content, file, lines }) =>
            snippetToHtml(content, colorScheme).then((_) => ({ file, lines, content: _ })),
          ),
        ) as any, // TODO: fix type
    ),
  )
