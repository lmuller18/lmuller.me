import Link from 'next/link'
import { LeftIcon } from '@components/icons'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Head from 'next/head'

const Palanaeum = () => {
  return (
    <>
      <Head>
        <title>Liam Muller | Palanaeum</title>
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
              href="https://www.palanaeum.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-4xl font-bold mr-2"
            >
              Palanaeum
            </a>
            <a
              href="https://www.palanaeum.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-red-600 via-purple-500 to-pink-500 text-gray-100 px-2 py-1 text-xs rounded-3xl shadow-elevate overflow-hidden"
            >
              Live!
            </a>
          </div>
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
              <img
                src="/images/palanaeum/palanaeum-3.png"
                style={{ maxWidth: 200 }}
              />
            </div>
            <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well">
              <img
                src="/images/palanaeum/palanaeum-2.png"
                style={{ maxWidth: 200 }}
              />
            </div>
            <div className="p-4 md:p-8 lg:p-14 flex items-start justify-center bg-darkNavy-well">
              <img
                src="/images/palanaeum/palanaeum-1.png"
                style={{ maxWidth: 200 }}
              />
            </div>
          </Carousel>
        </div>
        <div>
          <p className="text-xs opacity-50 mb-4">
            NOTE: Above photos have blurred out information because they are
            from a real book club I am in. The information would be viewable
            in-app.
          </p>
        </div>
        <div className="mt-16">
          <p className="mb-2">
            <b>Palanaeum</b> is a book club app for people to read and
            experience their favorite books together with a strong focus on
            spoiler protection and discussions. The main features of this app
            are broken down into two areas:
            <b> posts</b> and <b>discussions</b>.
          </p>
          <p className="mb-2">
            The original idea and the namesake come from when I was reading
            books in Brandon Sanderson&apos;s Cosmere universe (the Palanaeum is
            an inverted pyramid library in one of these books). A friend of mine
            had already read them all and I was finding it difficult to
            communicate my theories in ways that he could respond without giving
            up a spoiler. The solution I had was to create this app where I
            could post my theories, and he could post his own responses in
            future chapters. Example: in Chapter 2 I could post something about
            Character A being awesome, and in Chapter 25 he could have already
            posted something talking about how he can&apos;t wait for me to get
            here and realize he was a traitor. I could now have theories and
            conversations with him, and he could write down responses without
            having to wait for me to read 20 more chapters when he would have
            forgotten what he originally wanted to say. It was through this that
            spoiler protection became a main pillar of Palanaeum.
          </p>
          <p className="mb-2">
            Originally the app only had discussions. These were meant to be
            longer form writeups with the ability to have threaded forum-like
            discussion with other users. An example of this would be a
            discussion titled &quot;What was happening in this chapter with
            ___?&quot; and then the content would be the theory or observations
            that you had. Other members could then reply and you could have a
            conversation about that topic. Since spoiler protection is a main
            tenant of palanaeum, you can only create discussions for chapters
            that you have read - viewing and replying have the same rules.
          </p>
          <p className="mb-2">
            This worked great for the bigger discussion topics, but I found that
            it was actively supressing my ability to interact with my club
            members and also would prevent me from documenting thoughts that I
            would have mid-chapter. The solution to this was to incorporate a
            more casual posting &quot;live tweeting&quot; aspect to the app
            called posts.
          </p>
          <p className="mb-2">
            If discussions are Reddit threads, then posts are Tweets. Posts
            allow you to share quick snippets of your live reaction to parts of
            the book regardless of what you have read. For ease of use, the
            chapter that you are currently on is always pre-selected. You can
            sort your timeline by chapter or by date posted. These behave
            exactly like tweets in that you can still reply to the thread,
            however I still made sure that spoilers were respected: you will not
            be able to see the replies to your own post until you have finished
            that chapter - No Spoilers!
          </p>
          <p className="mb-2">
            With this inclusion of posts, I was back to opening up Palanaeum
            every time I had a thought about where I was at in a book. I added
            the ability to add context to a post (if the post said &quot;wow,
            THAT just happened&quot;, in the context you could include what
            &quot;THAT&quot; was for future members), and image uploads. I have
            loved being able to experience a book with a group and see other
            people&apos;s in the moment thoughts.
          </p>
          <p className="text-xl mt-6 mb-2">
            Example showing the difference between a post and a discussion:
          </p>
          <p className="text-xs opacity-50 mb-4">
            NOTE: The below photos are blurred to protect you from minor
            Dawnshard spoilers.
          </p>
          <div className="flex gap-2 flex-wrap items-start justify-center mb-6">
            <img src="/images/palanaeum/post.png" style={{ maxWidth: 370 }} />
            <img
              src="/images/palanaeum/discussion.png"
              style={{ maxWidth: 370 }}
            />
          </div>
          <p className="mb-2">
            This app was written with React, Remix, TypeScript, Prisma, and
            Postgres. Other features include:
            <ul className="list-disc list-inside">
              <li>Notifications</li>
              <li>Book import</li>
              <li>Reading trajectory graphs</li>
              <li>Top Post highlighting</li>
              <li>Top Discussion highlighting</li>
            </ul>
          </p>
        </div>
      </section>
    </>
  )
}

export default Palanaeum
