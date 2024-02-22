import { FC } from 'react'

import Check from '@/assets/Check'
import { Typography } from '@/components/ui/typography/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  onChange,
  position,
  required,
}) => {
  return (
    <div className={s.container}>
      <LabelRadix.Root asChild>
        <Typography
          as={'label'}
          className={`${s.label} ${disabled && s.disabled}`}
          variant={'body2'}
        >
          <div
            className={`${s.buttonWrapper} ${disabled && s.disabled} ${
              position === 'left' && s.leftl
            }`}
          >
            <CheckboxRadix.Root
              checked={checked}
              className={s.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onChange}
              required={required}
            >
              {checked && (
                <CheckboxRadix.Indicator className={s.indicator} forceMount>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
