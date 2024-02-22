import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  variant?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'h1'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', children, variant = 'h1', ...restProps } = props

  return (
    <Component className={`${s[variant]}`} {...restProps}>
      {children}
    </Component>
  )
}
