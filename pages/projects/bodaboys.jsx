import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { LeftIcon } from '@components/icons'
import Anchor from '@components/anchor'

const BodaBoys = () => {
  const [showTweet, setShowTweet] = useState(false)

  return (
    <>
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
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
              href="#live-disclaimer"
              className="underline text-4xl font-bold mr-2"
            >
              Boda Boys
            </a>
            <a
              href="#live-disclaimer"
              className="bg-gradient-to-br from-red-600 via-purple-500 to-pink-500 text-gray-100 px-2 py-1 text-xs rounded-3xl shadow-elevate overflow-hidden"
            >
              Live!
            </a>
          </div>
        </div>
        <div className="p-4 md:p-14 lg:p-20 flex justify-center bg-darkNavy-well shadow-elevate mb-4">
          <img
            className="block md:hidden"
            style={{ maxWidth: 200 }}
            src="/images/boda/boda_mobile_demo.gif"
          />
          <img
            className="hidden md:block"
            src="/images/boda/boda_responsive_demo.gif"
          />
        </div>
        <p className={clsx('text-xs opacity-50', showTweet ? 'mb-2' : 'mb-4')}>
          NOTE: 5000+ items have NOT been licked at Boda Borg, but is a
          reference to a &quot;tip&quot; that we found.{' '}
          <span
            className="cursor-pointer underline"
            onClick={() => setShowTweet((s) => !s)}
          >
            Show tweet
          </span>
        </p>
        <div
          className={clsx(
            'transition-all flex justify-center duration-500',
            showTweet
              ? 'opacity-100 visible pointer-events-auto mb-4'
              : 'opacity-0 invisible pointer-events-none mb-0'
          )}
          style={{
            height: showTweet ? 500 : 0,
          }}
        >
          <blockquote
            className="twitter-tweet"
            data-dnt="true"
            data-theme="dark"
          >
            <p lang="en" dir="ltr">
              <a href="https://twitter.com/HyperBooper?ref_src=twsrc%5Etfw">
                @HyperBooper
              </a>{' '}
              As we hope everyone understands, nothing in our facility needs to
              be licked, except for maybe some popsicles.{' '}
              <a href="https://twitter.com/hashtag/dontbegross?src=hash&amp;ref_src=twsrc%5Etfw">
                #dontbegross
              </a>{' '}
              <a href="https://twitter.com/hashtag/dontlicktheprops?src=hash&amp;ref_src=twsrc%5Etfw">
                #dontlicktheprops
              </a>{' '}
              <a href="https://twitter.com/hashtag/touchisallittakes?src=hash&amp;ref_src=twsrc%5Etfw">
                #touchisallittakes
              </a>{' '}
              <a href="https://t.co/RFXxPC4FBM">https://t.co/RFXxPC4FBM</a>
            </p>
            &mdash; Boda Borg Boston (@BodaBorgBoston){' '}
            <a href="https://twitter.com/BodaBorgBoston/status/1168518942173908993?ref_src=twsrc%5Etfw">
              September 2, 2019
            </a>
          </blockquote>
        </div>
        <div>
          <p className="mb-2">
            <b>Boda Boys</b> is a fun project for me and two other friends to
            track how we are progressing in a local series of puzzle rooms. If
            you have ever done an escape room, <b>Boda Borg</b> will be familiar
            and take the idea a step further. Instead of rooms to escape, they
            have series of &quot;Quests&quot; to solve. These quests may have 1
            - N number of rooms to complete and any wrong move can cause you to
            fail. If you fail the quest&apos;s rules, you exit the room and
            queue up again or try out a different one in the meantime. If you
            succeed, you&apos;re rewarded with a stamp. Some quests may have
            multiple stamps for different solutions, but normally there is one
            solution per quest. Quests have 3 different types:
          </p>
          <ul className="list-interpunct ml-8 mb-4 text-sm">
            <li>
              <b>Green</b>: Mostly mental - Heavy on the puzzles (The most
              difficult was developed by Harvard)
            </li>
            <li>
              <b>Black</b>: Mostly physical - Could involve crawling, hanging,
              climbing,
            </li>
            <li>
              <b>Red</b>: A mix of both - Expect anything
            </li>
          </ul>
          <p className="mb-4">
            While most people may book a two hour slot or try it for a party one
            time, <b>Boda Borg</b> offers a challenge to those interested:{' '}
            <b>Quest Master</b>. To complete this challenge, a group needs to
            complete every variant of every quest within 4 hours. My friends and
            I have been going to escape rooms for years, so when we saw this
            challenge we knew we wanted to go for it. The first step was to
            solve all of the rooms before we could attempt the marathon. This is
            where <b>Boda Boys</b> comes from. Using Next.js and Contentful, we
            were able to keep notes on all the rooms and well as track which
            ones we have completed or which ones still had other rooms or stamps
            left to finish. Unfortunately COVID-19 hit before we were able to
            clear our last room: <b>Boot Camp</b>. <b>Boda Borg</b> is set for
            an expansion, so once the pandemic is over we hope to have many more
            quests left on our plate before we are able to go for the{' '}
            <b>Quest Master</b> title.
          </p>
          <p className="mb-4">
            In reality, none of this is necessary to obtain the{' '}
            <b>Quest Master</b> title, but visiting <b>Boda Borg</b> has been a
            great time for us so it was fun to go overboard and create something
            that was more than just marking a quest as completed on our
            phones&apos; checklist app.
          </p>
          <p className="text-xs opacity-50 mb-4">
            NOTE: The walkthrough video above does not show off the actual quest
            pages out of respect for <b>Boda Borg</b>. The actual content of the
            quest pages are full of spoilers which goes against the spirit of
            what they have created. The quest page highlights the quest type, if
            we have completed the quest, the number of available stamps, and
            then a card per room per stamp with notes on how to complete the
            room and if we have completed it. Each quest may also have
            additional notes attached to the quest itself if information was
            more general and not tied to a room.
          </p>
          <Anchor id="live-disclaimer" />
          <p className="text-xs opacity-50 mb-4">
            LIVE STATUS DISCLAIMER: While the site is live, it is not being
            linked for the above reasons.
          </p>
          <p className="text-xs opacity-50">
            DISCLAIMER: Dashboard design inspired by multiple{' '}
            <a
              rel="noopener noreferrer"
              target="blank"
              className="underline"
              href="https://dribbble.com/tags/medical_dashboard"
            >
              dribbble projects
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default BodaBoys
