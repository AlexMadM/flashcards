import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import Eye from '@/assets/Eye'
import Search from '@/assets/Search'
import VisibilityOff from '@/assets/VisibilityOff'
import { Typography } from '@/components/ui/typography/Typography'

import s from './input.module.scss'

export type InputProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  onChange?: (e: string) => void
  onValueChange?: (e: string) => void
  placeholder?: string
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      errorMessage,
      label,
      onChange,
      onValueChange,
      placeholder,
      search,
      type,
      ...restProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordButtonShown = type === 'password'

    const finalType = getFinalType(type, showPassword)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    return (
      <div className={`${s.root} ${disabled ? s.disabled : ''}`}>
        {label && (
          <Typography as={'label'} className={s.label}>
            {label}
          </Typography>
        )}
        <div className={s.fieldContainer}>
          {search && <Search className={s.leadingIcon} />}
          <input
            className={`${s.field} ${!!errorMessage && s.error} `}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            {...restProps}
          />
          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
        </div>
        <Typography className={s.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
