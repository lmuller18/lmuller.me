import Link from 'next/link'
import Head from 'next/head'
import { LeftIcon } from '@components/icons'

const Upsource = () => {
  return (
    <>
      <Head>
        <title>Liam Muller | Upsource</title>
      </Head>
      <section className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <div className="flex items-center animate-pulse mr-4">
              <LeftIcon />
            </div>
          </Link>
          <div className="flex items-center">
            <a
              href="https://upsource.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-4xl font-bold mr-2"
            >
              Untitled
            </a>
            <a
              href="https://upsource.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-600 via-purple-500 to-pink-500 text-gray-100 px-2 py-1 text-xs rounded-3xl shadow-elevate overflow-hidden"
            >
              Live!
            </a>
          </div>
        </div>
        <div className="p-4 flex items-start justify-center bg-darkNavy-well shadow-elevate mb-4">
          <video
            controls
            autoPlay
            muted
            loop
            style={{ maxWidth: 300, height: 300 }}
          >
            <source src="/videos/upsource/upsource_demo.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="mb-4">
            View my profile{' '}
            <a
              href="https://upsource.vercel.app/liammuller"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              here!
            </a>
          </p>
          <p className="mb-4">
            This project came to be during the development of this website. I
            had been toying with the idea of a dashboard site for all the media
            a person has watched / listened to / played / etc, and I brought
            that into the homepage of this site. The intro has a list of
            different shows, tracks, and games that I personally recommend, and
            if I am wataching or listening to something you are able to see that
            in a popup component at the bottom of the screen.
          </p>
          <p className="mb-4">
            I thought it would be interesting to isolate those pieces into their
            own microapp and allow people to create their own. With this app,
            you&apos;ll be able to link your public facing page to anyone you
            want that way if someone ever asks you for something to watch, or
            what they want to know what you&apos;re into you can just send them
            the link and have it displayed beautifully.
          </p>
          <p className="mb-4">
            This project was created with TypeScript, Next.js, NextAuth.js,
            Auth0, and DynamoDB. Media integrations that make this possible come
            from Spotify, Trakt, Steam, TMDB, and IGDB.
          </p>
        </div>
      </section>
    </>
  )
}

export default Upsource
