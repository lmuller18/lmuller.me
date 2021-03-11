import Head from 'next/head'

import { DoubleUpIcon } from '@components/icons'
// import BioSection from '@components/bio-section'
import ProjectSection from '@components/project-section'
import RecommendationSection from '@components/recommendation-section'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liam Muller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* <BioSection /> */}
        <RecommendationSection />
        <ProjectSection />
        <div className="flex items-center justify-end">
          <Link href="#main">
            <a className="mx-8 my-2 p-2 animate-pulse border border-gray-50 rounded-md">
              <DoubleUpIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
