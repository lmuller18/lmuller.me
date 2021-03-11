import clsx from 'clsx'
// import { Children, cloneElement } from 'react'

import { useInView } from 'react-intersection-observer'

const IntersectionAnimation = ({
  children,
  animation = 'animate-slide',
  className,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={clsx(className, inView ? animation : 'opacity-0')}
    >
      {children}
    </div>
  )

  // return Children.map(children, (child) =>
  //   cloneElement(child, {
  //     ref,
  //     className: clsx(child.props.className, inView ? animation : 'opacity-0'),
  //   })
  // )
}

export default IntersectionAnimation
