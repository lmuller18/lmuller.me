import clsx from 'clsx'

import ProjectCard from '@components/project-card'
import Anchor from '@components/anchor'
import Link from 'next/link'

const getLink = (href, external = true) => ({ href, external })

const ProjectSection = () => (
  <section>
    <div className="h-px border-b border-coolGray-100 mx-auto w-2/3 my-8" />
    <PersonalSection />
    <div className="h-px my-8" />
    <Anchor id="projects" />
    <h1 className="text-4xl text-center mb-4">Experience</h1>
    <div className="h-px border-b border-coolGray-100 mx-auto w-2/3 my-8" />
    <ChewySection />
    <div className="h-px border-b border-coolGray-100 mx-auto w-2/3 my-8" />
    <EnduranceSection />
    <div className="h-px border-b border-coolGray-100 mx-auto w-2/3 my-8" />
    <EDTSection />
  </section>
)

const ProjectGrid = ({ children, className }) => (
  <div
    className={clsx(
      'grid gap-4 justify-center max-w-6xl w-full mx-auto px-4',
      className
    )}
    style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 300px))',
    }}
  >
    {children}
  </div>
)

const ChewySection = () => (
  <>
    <Anchor id="chewy" />
    <div className="flex items-center justify-center mb-2">
      <div className="flex items-center justify-center p-2 bg-white rounded-lg overflow-hidden h-28 w-28 shadow-elevate">
        <img src="/images/chewy.png" />
      </div>
    </div>
    <h3 className="text-center text-gray-300 font-light tracking-wider">
      Chewy
    </h3>
    <h3 className="text-center mb-8 text-gray-300 font-light tracking-wider">
      2021 - Present
    </h3>
    <ProjectGrid>
      <ProjectCard
        title="Pet Health"
        img="/images/chewy-full.png"
        imgClass="bg-white p-4"
        role="Software Engineer III"
        link={getLink('https://www.chewy.com/')}
        description="Helping to create more accessible, standardized, and cheaper medicine for pets."
      />
    </ProjectGrid>
  </>
)

const EnduranceSection = () => (
  <>
    <Anchor id="eigi" />
    <div className="flex items-center justify-center mb-2">
      <div className="flex items-center justify-center p-2 bg-white rounded-lg overflow-hidden h-28 w-28 shadow-elevate">
        <img src="/images/eigi.png" />
      </div>
    </div>
    <h3 className="text-center text-gray-300 font-light tracking-wider">
      Endurance International Group
    </h3>
    <h3 className="text-center mb-8 text-gray-300 font-light tracking-wider">
      2019 - 2021
    </h3>
    <ProjectGrid>
      <ProjectCard
        title="Creativ.eMail"
        img="/images/creativemail.svg"
        role="Software Engineer"
        link={getLink('https://www.creativemail.com/')}
        description="A WordPress Email Marketing solution - Creativ.eMail is supported by a simple and intelligent email editor inspired by WebsiteBuilder's website editor. Includes insight tools, automations, and social integrations."
      />
      <ProjectCard
        title="WebsiteBuilder"
        img="/images/wsb1.svg"
        imgClass="bg-wsb p-4"
        role="Software Engineer"
        link={getLink('https://www.websitebuilder.com/')}
        description="A collection of tools meant to support small business in the web landscape. Main focus is on creating a website with the easy and intelligent editor, but focus also expands to domains, insights, email, social presence, logos, etc."
      />
    </ProjectGrid>
  </>
)

const PersonalSection = () => (
  <>
    <Anchor id="darkamazon" />
    <div className="flex items-center justify-center mb-2">
      <img
        src="/images/darkamazon.svg"
        className="rounded-lg overflow-hidden h-28 w-28 shadow-elevate"
      />
    </div>
    <h3 className="text-center mb-2 text-gray-300 font-light tracking-wider">
      Personal Projects
    </h3>
    <h3 className="text-center mb-8 text-gray-300 font-light tracking-wider">
      2018 - Present
    </h3>
    <ProjectGrid>
      <ProjectCard
        title="Magi"
        img="/images/darkamazon.svg"
        link={getLink('https://magi-teal.vercel.app/')}
        date="2024"
        description="A web app to track and manage gifts for friends and family birthday and Christmas. Built to work offline and local first, this project uses dexie.js and service workers to cache data and work offline."
      />
      <ProjectCard
        title="Pokedoku Trainer"
        img="/images/pokedoku-trainer.png"
        link={getLink('https://pokedoku-trainer-nine.vercel.app')}
        date="2024"
        description={() => (
          <>
            A fun quiz game to test your knowledge of Pokemon types. Inspired by{' '}
            <a className="underline font-bold" href="https://www.pokedoku.com">
              pokedokue.com
            </a>
            , this project trains you to be ready for your next puzzle.
          </>
        )}
      />
      <ProjectCard
        title="Palanaeum"
        img="/images/palanaeum.png"
        link={getLink('/projects/palanaeum', false)}
        date="2022"
        description={() => (
          <>
            A book club app for people to read and experience their favorite
            books together with a strong focus on spoiler protection and
            discussions.
          </>
        )}
      />
      <ProjectCard
        title="Is Andor Good?"
        img="/images/is-andor-good.png"
        link={getLink('https://www.is-andor-good.com', true)}
        date="2022"
        description={() => (
          <>
            A quick and fun blog built with Astro to &quot;review&quot; each
            episode of Andor. Share the link of any of the reviews to reveal the
            answer to the question &quot;is Andor good?&quot; without having to
            open it up.
          </>
        )}
      />
      <ProjectCard
        title="Upsource"
        img="/images/upsource.png"
        link={getLink('/projects/upsource', false)}
        date="2021"
        description={() => (
          <>
            A place for people to consolidate their media recommendations. This
            project was based off of the{' '}
            <Link href="#personal">
              <a className="underline font-bold">recommendation section</a>
            </Link>{' '}
            above and the Now Playing popup.
          </>
        )}
      />
      <ProjectCard
        title="Hubworld"
        img="/images/hubworld.svg"
        link={getLink('/projects/hubworld', false)}
        date="2021"
        description={() => (
          <>
            A UI / UX test and overhaul of{' '}
            <Link href="#raidr">
              <a className="underline font-bold">Raidr</a>
            </Link>{' '}
            with a focus on a user&apos;s profile over their schedule. This was
            a project to experiment with design and user interactions within the
            familiar space of Raidr.
          </>
        )}
      />
      <ProjectCard
        title="Hubworld Pulse"
        img="/images/hubworldpulse.gif"
        link={getLink('/projects/hubworld-pulse', false)}
        date="2020"
        description={() => (
          <>
            A distilled version of{' '}
            <Link href="#raidr">
              <a className="underline font-bold">Raidr</a>
            </Link>
            . Rather than scheduling full games with friends that requires a
            time, game, and invite; Hubworld Pulse simply shows who is currently
            online and looking the play.
          </>
        )}
      />
      <ProjectCard
        title="Boda Boys"
        img="/images/bodaboys.png"
        link={getLink('/projects/bodaboys', false)}
        imgClass="bg-black"
        date="2020"
        description={() => (
          <>
            A fun site for me and my friends to keep track of our progress
            clearing a local puzzle / escape room franchise. With 15+ different
            rooms and an achievement to beat them all in a day, we wanted a way
            to keep notes and track our successes. <br />{' '}
            <span
              className="block mt-2 font-light text-gray-500 leading-3"
              style={{ fontSize: 10 }}
            >
              The site is live for the three of us, but in order to respect the
              spirit of Boda Borg I am not posting the link to the quest
              solutions here.
            </span>
          </>
        )}
      />
      <ProjectCard
        id="raidr"
        title="Raidr"
        img="/images/raidr.png"
        imgClass="bg-raidr p-4"
        link={getLink('/projects/raidr', false)}
        date="2019"
        description="App to schedule and manage online game sessions with friends. Pick a time, game, and friends to send an invite. Each gametime could have socials attached so people could know which chatroom to be in or what streaming service it would be live on."
      />
      <ProjectCard
        title="Fortnite Viewer"
        img="/images/fortniteviewer.png"
        imgClass="bg-purple-400 p-4"
        link={getLink('/projects/fortnite', false)}
        date="2018"
        description="An application that allows users to see the current Fortnite store, challenges, and upcoming items. Also allows users to be notified via push notification when certain items return to the store."
      />
      <ProjectCard
        title="PUBG Viewer"
        img="/images/pubgviewer.png"
        link={getLink('/projects/pubg', false)}
        date="2018"
        imgClass="bg-amber-500 p-4"
        description="A full stat tracker application for Player Unknown's Battlegrounds. Allow players to track their stats in each game mode throughout different seasons. Also allow users to breakdown their matches: from individual firefights, to their pathing throughout the whole match."
      />
    </ProjectGrid>
  </>
)

const EDTSection = () => (
  <>
    <Anchor id="edt" />
    <div className="flex items-center justify-center mb-2">
      <div className="flex items-center justify-center rounded-lg overflow-hidden h-28 w-28 bg-black shadow-elevate">
        <img src="/images/eagledream.png" />
      </div>
    </div>
    <h3 className="text-center text-gray-300 font-light tracking-wider">
      EagleDream Technologies
    </h3>
    <h3 className="text-center mb-8 text-gray-300 font-light tracking-wider">
      2017 - 2019
    </h3>
    <ProjectGrid>
      <ProjectCard
        title="Constellation Brands"
        imgClass="bg-white px-4"
        img="/images/copa.jpeg"
        role="Software Engineer"
        description="Internal enterprise-level order processing portal used by one of the largest North American distributor of wine and spirits."
      />
      <ProjectCard
        title="Monro"
        img="/images/monro.png"
        imgClass="p-4 bg-monro"
        role="Software Engineer"
        description="Multiple web applications from customer facing appointment scheduling, to internal reporting tools."
      />
      <ProjectCard
        title="University of Rochester"
        img="/images/ur.png"
        imgClass="p-4 bg-ur"
        role="Software Engineer"
        description="Administrative portal for managing security audits and vendor clearance and approval."
      />
    </ProjectGrid>
  </>
)

export default ProjectSection
