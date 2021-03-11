import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { LeftIcon } from '@components/icons'

const Raidr = () => {
  const [showOldDesign, setShowOldDesign] = useState(false)
  return (
    <section className="max-w-4xl mx-auto p-4">
      <div className="flex items-center mb-4">
        <Link href="/">
          <div className="flex items-center animate-pulse mr-4">
            <LeftIcon />
          </div>
        </Link>
        <h2 className="text-4xl font-bold">Raidr</h2>
      </div>
      <div className="p-4 md:p-8 lg:p-14 flex justify-center bg-darkNavy-well shadow-elevate mb-4">
        <img src="/images/raidr/raidr.png" style={{ maxWidth: 200 }} />
      </div>
      <div>
        <p className="mb-2">
          <b>Raidr</b> is a scheduling application built for the purpose of
          viewing what games you plan to be playing with others. Derived from
          &quot;Raid&quot; - <span className="text-xs opacity-75">/rād/</span> -{' '}
          <b>Raidr</b> is meant to solve the problem of scheduling large groups
          of people to get together and play a game. One of the hardest parts of
          a running a raid is getting everyone together in the same spot at the
          same time. <b>Raidr</b> allows the host to not only select the game
          being played, but also attach any number of links such as:
        </p>
        <ul className="list-interpunct ml-8 mb-2 text-sm">
          <li>Twitch Streams</li>
          <li>Discord Rooms</li>
          <li>YouTube Channels</li>
          <li>Twitter Profiles</li>
          <li>
            <span style={{ textDecoration: 'line-through' }}>
              Mixer Streams
            </span>
            😢
          </li>
          <li>Just plain links</li>
          <li>And More...</li>
        </ul>
        <p className="mb-4">
          Users can also view their entire schedule and stats related to which
          games they have been playing.
        </p>
        <div
          className={clsx(
            'transition-all flex flex-col items-center duration-500 bg-darkNavy-well rounded-lg shadow-elevate overflow-hidden',
            showOldDesign
              ? 'opacity-100 visible pointer-events-auto mb-4'
              : 'opacity-0 invisible pointer-events-none mb-0'
          )}
          style={{
            height: showOldDesign ? 500 : 0,
          }}
        >
          <span className="m-2 text-center">
            And this was the second design iteration 😬😬😬😬😬🙈🙈🙈🙈🙈🙈🙈
          </span>
          <img
            src="/images/raidr/raidr_old.png"
            className="object-contain"
            style={{ height: 450 }}
          />
        </div>
        <p className="mb-2">
          In terms of development, <b>Raidr</b> has gone through many
          iterations. Both the{' '}
          <span
            className="underline cursor-pointer"
            onClick={() => setShowOldDesign((s) => !s)}
          >
            design
          </span>{' '}
          and codebase have undergone major changes multiple times. I like to
          learn by doing, but just doing tutorials or clones of other
          peoples&apos; ideas is no fun. <b>Raidr</b> has often been a test bed
          for learning new ideas:
        </p>
        <ul className="list-interpunct ml-8 mb-4 text-sm">
          <li>
            Reading about Federated Servers? Implement Apollo Federation on the
            API layer.
          </li>
          <li>
            Wanting to see how TypeScript and React work together? The{' '}
            <b>Raidr</b> frontend could use a facelift anyways.
          </li>
        </ul>
        <p className="mb-2">
          Technologies that have been utilized in the different iterations have
          been:
        </p>
        <ul className="list-interpunct ml-8 mb-2 text-sm">
          <li>React</li>
          <li>TypeScript</li>
          <li>FireBase</li>
          <li>AWS Lambda</li>
          <li>AWS DynamoDB</li>
          <li>Auth0</li>
          <li>Apollo</li>
          <li>Serverless</li>
          <li>GraphQL CodeGen</li>
          <li>and more.</li>
        </ul>
        <p className="text-xs opacity-50 mb-4">
          NOTE: Unfortunately due to major changes in the{' '}
          <a className="underline" href="https://www.igdb.com/">
            IGDB API
          </a>
          , the current version of <b>Raidr</b> is unavailable until I get the
          time to update the API layer. Selecting a game for a scheduled Game
          Time is a central pillar of <b>Raidr</b> and unfortunately until I
          have the time to revisit this, <b>Raidr</b> is not in a demo-able
          state.
        </p>
      </div>
    </section>
  )
}

export default Raidr
