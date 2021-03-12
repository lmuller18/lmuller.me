import Link from 'next/link'
import { LeftIcon } from '@components/icons'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Head from 'next/head'

const PUBG = () => {
  return (
    <>
      <Head>
        <title>Liam Muller | PUBG Viewer</title>
      </Head>
      <section className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <div className="flex items-center animate-pulse mr-4">
              <LeftIcon />
            </div>
          </Link>
          <h2 className="text-4xl font-bold">PUBG Viewer</h2>
        </div>
        <div className=" bg-darkNavy-well shadow-elevate mb-4 rounded-xl overflow-hidden p-1">
          <Carousel
            autoPlay
            showArrows
            infiniteLoop
            showIndicators
            swipeable
            emulateTouch
            showThumbs={false}
          >
            <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well">
              <img src="/images/pubg/pubg_1.png" style={{ maxWidth: 200 }} />
            </div>
            <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well">
              <img src="/images/pubg/pubg_2.png" style={{ maxWidth: 200 }} />
            </div>
            <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well">
              <img src="/images/pubg/pubg_3.png" style={{ maxWidth: 200 }} />
            </div>
            <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well">
              <img src="/images/pubg/pubg_4.png" style={{ maxWidth: 200 }} />
            </div>
          </Carousel>
        </div>
        <div>
          <p className="mb-2">
            <b>PUBG Viewer</b> is an Angular PWA based around PUBG -
            specifically user and match stats. I was actively playing PUBG when
            the beta for the official API went live so I was extremely excited
            to dive into all of the data that was provided. Users can search for
            any account and view statistics per season and per match type
            (Solos, Duos, Squads, First Person) such as:
          </p>
          <div className="mb-2 text-sm">
            <p>PURE STATS</p>
            <ul className="list-interpunct ml-8 mb-2">
              <li>Kills</li>
              <li>Longest Kill</li>
              <li>and more...</li>
            </ul>
            <p>DERIVED STATS</p>
            <ul className="list-interpunct ml-8">
              <li>Win Percentage</li>
              <li>Top 10 Percentage</li>
              <li>KDR</li>
            </ul>
          </div>
          <p className="mb-4">
            The match details screen was my favorite page. As a player, I loved
            being able to go to my own map after a match was over to breakdown
            how me and my friends did. The match details screen would load in
            all the stats for the player&apos;s team and the winning team to
            provide a good comparison. Each player was able to see which kills
            they got, who against, and with what weapon, as well as an accuracy
            breakdown which showed an SVG with color coding breaking down which
            areas the player did the most damage to throughout the match. These
            stats were derived from the raw match telemetry events and
            calculated on my API before being sent back to the user.
          </p>
          <p className="mb-4">
            The last piece of major functionality was the Replay tab on the
            match details screen. This took the telemetry data and drew the
            player&apos;s squad&apos;s movement and kills ontop of the game map.
            This was fun to revist older matches to jog your memory on where all
            the firefights happened.
          </p>
          <p className="text-xs opacity-50 mb-4">
            NOTE: Unfortunately even though this data comes from the offical API
            before being processed by my own API, this was written while the API
            was in beta and it has since had breaking changes implemented and I
            have not revisited the project.
          </p>
        </div>
      </section>
    </>
  )
}

export default PUBG
