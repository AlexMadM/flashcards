import * as RadioGroup from '@radix-ui/react-radio-group'

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      aria-label={'View density'}
      className={'RadioGroupRoot'}
      defaultValue={'default'}
    >
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={'RadioGroupItem'} id={'r1'} value={'default'}>
          <RadioGroup.Indicator className={'RadioGroupIndicator'} />
        </RadioGroup.Item>
        <label className={'Label'} htmlFor={'r1'}>
          Default
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={'RadioGroupItem'} id={'r2'} value={'comfortable'}>
          <RadioGroup.Indicator className={'RadioGroupIndicator'} />
        </RadioGroup.Item>
        <label className={'Label'} htmlFor={'r2'}>
          Comfortable
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={'RadioGroupItem'} id={'r3'} value={'compact'}>
          <RadioGroup.Indicator className={'RadioGroupIndicator'} />
        </RadioGroup.Item>
        <label className={'Label'} htmlFor={'r3'}>
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
)

export default RadioGroupDemo
