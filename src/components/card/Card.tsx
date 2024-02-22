import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  return <div className={''} ref={ref} {...restProps}></div>
})
