import { useState } from 'react'

import Anchor from '@components/anchor'
import GameCard from '@components/game-card'
import WatchCard from '@components/watch-card'
import ListenCard from '@components/listen-card'
import RolledCard from '@components/rolled-card'

import useRecommendation from '@hooks/use-recommendation'
import { LISTENED, WATCHED, ROLLED, CLICKED } from '@helpers/media'
import Link from 'next/link'

const RecommendationSection = () => {
  const [recommendation, { getRecommendation }] = useRecommendation()
  const [showRecs, setShowRecs] = useState(false)

  const showRecBanner = () => {
    setShowRecs(true)
    getRecommendation()
  }

  return (
    <section className="max-w-6xl p-8 w-full mx-auto my-0">
      <Anchor id="personal" />
      <h1 className="text-4xl text-center mb-4">Get to Know Me</h1>
      <div className="max-w-3xl w-full mx-auto mb-3 flex flex-col items-center">
        <div className="mb-4">
          <p className="mb-1">
            Coding is fun and all. And while I do spend a good amount of time on
            my{' '}
            <Link href="#darkamazon">
              <a className="underline">personal projects</a>
            </Link>
            , I also love music, movies, and games. Click below to let me
            recommend you something I&apos;ve been listening to, watching, or
            playing.
          </p>
          <p>
            Otherwise, feel free to skip to the{' '}
            <Link href="#projects">
              <a className="underline">experience.</a>
            </Link>
          </p>
        </div>
        <button
          onClick={showRecBanner}
          className="w-full md:w-auto text-white border border-violet-500 bg-violet-500 text-sm rounded-lg p-2 flex items-center justify-center"
        >
          {!showRecs ? (
            'Recommend Something'
          ) : (
            <div className="flex items-center gap-2">
              Anotha One{' '}
              <img
                src="/images/anothaone.jpeg"
                className="h-6 w-6 object-contain overflow-hidden rounded-md"
              />
            </div>
          )}
        </button>
      </div>
      {showRecs && recommendation?.mediaType === WATCHED && (
        <WatchCard media={recommendation} />
      )}
      {showRecs && recommendation?.mediaType === LISTENED && (
        <ListenCard media={recommendation} />
      )}
      {showRecs && recommendation?.mediaType === ROLLED && (
        <RolledCard media={recommendation} />
      )}
      {showRecs && recommendation?.mediaType === CLICKED && (
        <GameCard media={recommendation} />
      )}
    </section>
  )
}
export default RecommendationSection
