import Link from 'next/link'
import { LeftIcon } from '@components/icons'
import Head from 'next/head'

const HubworldPulse = () => {
  return (
    <>
      <Head>
        <title>Liam Muller | Hubworld Pulse</title>
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
              href="https://hubworld-lfg.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-4xl font-bold mr-2"
            >
              Hubworld Pulse
            </a>
            <a
              href="https://hubworld-lfg.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-600 via-purple-500 to-pink-500 text-gray-100 px-2 py-1 text-xs rounded-3xl shadow-elevate overflow-hidden"
            >
              Live!
            </a>
          </div>
        </div>
        <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well shadow-elevate mb-4">
          <img
            style={{ maxWidth: 200 }}
            src="/images/hubworld-pulse/hubworld-pulse.png"
          />
        </div>
        <div>
          <p className="mb-2">
            <b>Hubworld Pulse</b> is a very simple application developed as a
            test meant to solve a similar problem that{' '}
            <Link href="/projects/raidr">
              <a className="underline">
                <b>Raidr</b>
              </a>
            </Link>{' '}
            set out to solve, in a different way.
          </p>
          <p className="text-xs opacity-50 mb-4">
            If you haven&apos;t already read about <b>Raidr</b>, I would suggest
            heading over there first to gain some context surrounding the
            project.{' '}
          </p>
          <p className="mb-8">
            <b>Raidr</b> is an active tool mean to schedule time to play games
            with other. <b>Hubworld Pulse</b> is instead a passive tool. Rather
            than creating a calendar event and inviting a friend every time you
            want to play a game, in <b>Hubworld Pulse</b> you simply flip a
            switch indicating that you are online. This online status is visible
            to any of your friends and is a live update to anyone inside of the
            app. &quot;Pulse&quot; comes from the idea that by marking yourself
            as online, you are sending out a pulse to all of your friends that
            you are currently available. My idea for this came because apps like
            Discord, Steam, Origin, etc, have an online status, but that
            doesn&apos;t necessarily mean that you are looking to play with
            others - it just means the app is open. In <b>Hubworld Pulse</b>,
            being &quot;online&quot; means &quot;I&apos;m available right now.
            Reach out to me if you want to play.&quot;. This concept within
            multiplayer gaming is often called LFG - Looking For Group, but it
            usually is for people seeking parties to join that they are not
            usually a part of. Pulse is all about letting your friends know that
            you&apos;re ready to get together, and checking to see which of your
            friends are feeling the same.
          </p>
          <p className="mb-8">
            In terms of development, <b>Hubworld Pulse</b> is probably the
            simplest app I have written. I wanted to try something different so
            I used AWS Appsync to work as my backend. In Appsync I defined my
            GraphQL schema as well as mutation and subscriptions. From there I
            wrote my resolvers inside of the Appsync UI. They connect directly
            to a DynamoDB instance that stores user, friend, and online data.
            The logic behind the online status is extremely simple. When you
            login, you can toggle your online status. This action fires a
            mutation that sets a database entry in the online table with a set
            TTL. Having an entry in this table with the TTL being in the future
            signifies that you are online. When the TTL is hit, DynamoDB will
            automatically delete the record. This is to ensure you do not just
            become &quot;online&quot; and close the app and stay online forever.
            While the app is open and you are online, this mutation will
            occassionaly ping again to push back that TTL. When you want to go
            offline, the same mutation is called with a TTL of 0 so the record
            is immediately invalidated and promptly autodeleted.
          </p>
          <p className="mb-8">
            To view the online status of your friends, I use subscriptions
            within Appsync. When you are looking at your friends list, you are
            subscribed to their online status changes so if you have the app
            open you won&apos;t need to refresh to see if there are changes -
            you will see them in realtime!
          </p>
          <p className="mb-8">
            Working with Appsync was very interesting because I have always
            written my own code for my backend APIs, but in Appsync the most
            intensive work was editing the VTL code within custom resolvers to
            make sure they would be querying the correct resources.
          </p>
          <p className="mb-8">
            In the long-term, I would love to integrate this functionality into
            the full{' '}
            <Link href="/projects/hubworld">
              <a className="underline">
                <b>Hubworld</b>
              </a>
            </Link>{' '}
            application now that I have done it once.
          </p>
        </div>
      </section>
    </>
  )
}

export default HubworldPulse
