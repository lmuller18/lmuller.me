import Link from 'next/link'
import { LeftIcon } from '@components/icons'
import Head from 'next/head'

const Fortnite = () => {
  return (
    <>
      <Head>
        <title>Liam Muller | Fortnite Viewer</title>
      </Head>
      <section className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <div className="flex items-center animate-pulse mr-4">
              <LeftIcon />
            </div>
          </Link>
          <h2 className="text-4xl font-bold">Fortnite Viewer</h2>
        </div>
        <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well shadow-elevate mb-4">
          <img src="/images/fortnite/fortnite.png" style={{ maxWidth: 200 }} />
        </div>
        <p className="text-xs opacity-50 mb-4">
          NOTE: Bell Icon not shown on HollowHead because this device did not
          have a push notification token.
        </p>
        <div>
          <p className="mb-2">
            <b>Fortnie Viewer</b> is an Angular PWA based around Fortnite -
            specifically its cosmetics. The main functionality was showing users
            the daily store to display each item as well as:
          </p>
          <ul className="list-interpunct ml-8 mb-2 text-sm">
            <li>Rarity</li>
            <li>Price</li>
            <li>Type - Skin, backbling, etc.</li>
          </ul>
          <p className="mb-4">
            The store page included a filter by rarity and type as well. The
            biggest piece of functionality was notifications. Users could
            subscribe to any item on the store page or more importantly - the
            upcoming page. Whenever these items appeared back in the store,
            users would recieve a push notification - allowing you to make sure
            you didn&apos;t miss out on anything you were excited for.
          </p>
          <p className="mb-4">
            <b>Fortnite Viewer</b> also included a spotlight on the top current
            Fortnite Twitch streams on the homescreen, a challenge list tracker
            for the current season, a news page, basic user search and stats,
            and a page to manage all items the user was set to be notified
            about.
          </p>
          <p className="text-xs opacity-50 mb-4">
            NOTE: Unfortunately there is no official Fortnite API available. All
            data for this project was sourced and stitched together from
            multiple unoffical sources in 2018 which have since either stopped
            functioning entirely or have undergone breaking changes.
          </p>
        </div>
      </section>
    </>
  )
}

export default Fortnite
