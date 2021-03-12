import Link from 'next/link'
import Head from 'next/head'
import { LeftIcon } from '@components/icons'

const Hubworld = () => {
  return (
    <>
      <Head>
        <title>Liam Muller | Hubworld</title>
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
              href="https://hubworld.netlify.app/me"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-4xl font-bold mr-2"
            >
              Hubworld
            </a>
            <a
              href="https://hubworld.netlify.app/me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-600 via-purple-500 to-pink-500 text-gray-100 px-2 py-1 text-xs rounded-3xl shadow-elevate overflow-hidden"
            >
              Live!
            </a>
          </div>
        </div>
        <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well shadow-elevate mb-4">
          <video
            controls
            autoPlay
            muted
            loop
            style={{ maxWidth: 300, height: 600 }}
          >
            <source src="/videos/hubworld/hubworld_demo.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="">
            <b>Hubworld</b> is a frontend only project of mine that is a
            reimagining of my{' '}
            <Link href="/projects/raidr">
              <a className="underline">
                <b>Raidr</b>
              </a>
            </Link>{' '}
            project with more of a focus centered around user profiles instead
            of schedule management. You can play around with the interactable
            demo{' '}
            <a
              href="https://hubworld.netlify.app/me"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              here
            </a>
            .
          </p>
          <p className="text-xs opacity-50 mb-4">
            {' '}
            If you haven&apos;t already read about <b>Raidr</b>, I would suggest
            heading over there first to gain some context surrounding the
            project.{' '}
          </p>
          <p className="mb-4">
            As I&apos;ve written on the <b>Raidr</b> page, if I am going to work
            on learning or improving a skill, I like to do so in the context of
            a full project - even if it never is fully released. In the case of{' '}
            <b>Hubworld</b>, I really wanted to focus on user interaction. As
            computer science major, I was never given the opportunity to
            formally learn or explore design, but in my career I have had to
            make design decisions and recommendations for projects I&apos;ve
            worked on. I wanted to grow in this area, so I spun up a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{' '}
            project with{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://tailwindcss.com/"
            >
              tailwind.css
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://www.framer.com/motion/"
            >
              framer motion
            </a>{' '}
            and set to work. I chose <b>Raidr</b> as a basis because it was a
            space that I am very familiar with and I knew what I would want to
            improve if I revisited it. I kept it as a frontend only project so
            that I could make sure to focus on design decisions instead of API
            creation, authentication states, etc and all those fun things. I
            made sure to mock data and data fetching so that if I decide to
            revist and implement the functionality, the components should more
            or less be ready to go.
          </p>
          <p className="mb-4">
            Now that I have a strong foundation for the main views within{' '}
            <b>Hubworld</b>, I would love to add more interactions to the
            existing pages and then expand it with a few more screen before
            eventually fully implementing this design and the corresponding
            backend.
          </p>
        </div>
      </section>
    </>
  )
}

export default Hubworld
