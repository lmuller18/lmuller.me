import Lottie from 'react-lottie'

import animationData from './Desk.json'
import {
  AcademicCap,
  LocationMarkerIcon,
  LinkedInIcon,
  GithubIcon,
  MailIcon,
} from '@components/icons'

const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  return (
    <section className="grid grid-cols-1 max-w-3xl mx-auto my-0 w-full p-8 pb-0 sm:pb-8 items-center">
      <div className="gap-1 sm:gap-2 col-start-1 row-start-1 flex flex-col justify-center -mt-16 sm:mt-0">
        <h1
          className="font-bold tracking-wider lg:-ml-24"
          style={{ fontSize: 'max(16px, 5vmin)' }}
        >
          Liam Muller
        </h1>
        <div className="lg:-ml-24 flex items-center w-3/5">
          <AcademicCap h="h-4 sm:h-6" w="w-4 sm:w-6" />
          <div className="hidden text-sm sm:flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-center">
            <h3 className="ml-2 mr-0 lg:mr-1">Bachelors of Science</h3>
            <h3 className="ml-2 lg:ml-0">
              @ Rochester Institute of Technology
            </h3>
          </div>
          <h3 className="ml-2 block sm:hidden text-xs">BS of CS @ RIT</h3>
        </div>
        <div className="lg:-ml-24 flex items-center w-3/5">
          <LocationMarkerIcon h="h-4 sm:h-6" w="w-4 sm:w-6" />
          <h3 className="ml-2 hidden text-sm sm:block">
            Remote - Eastern Standard Time
          </h3>
          <h3 className="ml-2 block sm:hidden text-xs">Remote - EST</h3>
        </div>
        <div className="lg:-ml-24 flex items-center w-3/5">
          <LinkedInIcon h="h-4 sm:h-6" w="w-4 sm:w-6" />
          <ContactLink href="https://linkedin.com/in/liammuller">
            <Muted>linkedin.com/in/</Muted>liammuller
          </ContactLink>
          <h3 className="ml-2 block sm:hidden text-xs">LinkedIn</h3>
        </div>
        <div className="lg:-ml-24 flex items-center w-3/5">
          <GithubIcon h="h-4 sm:h-6" w="w-4 sm:w-6" />
          <ContactLink href="https://github.com/lmuller18">
            <Muted>github.com/</Muted>lmuller18
          </ContactLink>
          <h3 className="ml-2 block sm:hidden text-xs">GitHub</h3>
        </div>
        <div className="lg:-ml-24 flex items-center w-3/5">
          <MailIcon h="h-4 sm:h-6" w="w-4 sm:w-6" />
          <ContactLink href="mailto:liam.w.muller at gmail.com">
            liam.w.muller<Muted> at gmail.com</Muted>
          </ContactLink>
          <h3 className="ml-2 block sm:hidden text-xs">Email</h3>
        </div>
      </div>
      <div className="col-start-1 row-start-1 max-h-full pointer-events-none">
        <Lottie
          isClickToPauseDisabled
          options={defaultOptions}
          speed={0.8}
          style={{
            alignItems: 'center',
            display: 'flex',
            maxHeight: '445px',
            cursor: 'default',
          }}
        />
      </div>
    </section>
  )
}

const ContactLink = ({ children, href }) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="blank"
    className="ml-2 hidden text-sm sm:block"
  >
    {children}
  </a>
)
const Muted = ({ children }) => (
  <span className="opacity-75 font-normal">{children}</span>
)

export default HeroSection
