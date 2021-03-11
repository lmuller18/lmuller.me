import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Anchor from '@components/anchor'
import IntersectionAnimation from '@components/intersection-animation'
import { useEffect, useState } from 'react'

const externalLinkOptions = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

const ProjectCard = ({
  id,
  img,
  title,
  role,
  imgClass,
  link,
  description,
  date,
}) => {
  const [isSelected, setIsSelected] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsSelected(router.asPath.endsWith(`#${id}`))
  }, [router.asPath])

  return (
    <IntersectionAnimation className="flex">
      <div
        className={clsx(
          'p-4 pb-4 bg-violet-200 rounded-lg shadow-elevate flex flex-col items-center text-black',
          isSelected && 'border-purple-400 border-4'
        )}
      >
        {id && <Anchor id={id} />}
        <span className="text-xl font-bold mb-1">{title}</span>
        {link ? (
          <Link href={link.href}>
            <a
              href={link.href}
              {...(link.external ? externalLinkOptions : {})}
              className="mb-2"
            >
              <ProjectImage
                img={img}
                imgClass={imgClass}
                isSelected={isSelected}
              />
            </a>
          </Link>
        ) : (
          <ProjectImage img={img} imgClass={imgClass} isSelected={isSelected} />
        )}
        {date && <span className="font-light text-gray-500">{date}</span>}
        {role && <span className="font-light text-gray-500">{role}</span>}
        {description && (
          <p className="p-1">
            {typeof description === 'string' && description}
            {typeof description === 'function' && description()}
          </p>
        )}
        {link && (
          <div className="flex flex-grow items-end w-full mt-2">
            <Link href={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  {...externalLinkOptions}
                  className="w-full text-white border border-violet-900 bg-violet-900 text-sm rounded-lg p-2 flex items-center justify-center"
                >
                  VISIT
                </a>
              ) : (
                <a
                  href={link.href}
                  className="w-full text-white border border-violet-500 bg-violet-500 text-sm rounded-lg p-2 flex items-center justify-center"
                >
                  SEE MORE
                </a>
              )}
            </Link>
          </div>
        )}
      </div>
    </IntersectionAnimation>
  )
}

const ProjectImage = ({ img, imgClass, isSelected }) => (
  <img
    src={img}
    className={clsx(
      'h-40 w-40 rounded-lg overflow-hidden shadow-lg mb-2 object-contain',
      isSelected && 'animate-rubberBand',
      imgClass
    )}
    style={
      isSelected
        ? {
            // backfaceVisibility: 'hidden',
            animationIterationCount: 1,
            animationDuration: '1s',
            animationDelay: '500ms',
          }
        : {}
    }
  />
)

export default ProjectCard
