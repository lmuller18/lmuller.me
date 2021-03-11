import IntersectionAnimation from '@components/intersection-animation'

const BioSection = () => {
  return (
    <IntersectionAnimation>
      <section className="max-w-3xl w-full mx-auto  p-8 pt-0 my-0">
        <div className="mb-3">
          <p className="mb-4"></p>
          I&apos;m here:
          <div
            className="grid gap-2 place-items-center"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
            }}
          >
            <a
              href="#projects"
              className="w-full sm:w-52 text-white bg-violet-900 text-sm rounded-lg p-2 text-center"
            >
              For the code
            </a>
            <a
              href="#personal"
              className="w-full sm:w-52 text-white bg-violet-500 text-sm rounded-lg p-2 text-center"
            >
              To get to know you
            </a>
          </div>
        </div>
        <div></div>
      </section>
    </IntersectionAnimation>
  )
}

export default BioSection
