import * as React from 'react'
import * as PropTypes from 'prop-types'

const includes = (array: any[], value: any) => {
  return array.some((item) => item === value)
}

const uniq = (array: any[]) => {
  return array.filter((item, index, self) => self.indexOf(item) === index)
}

export type CheckboxGroupSelectedValues = (string | number)[]

export interface CheckboxGroupContext {
  checkboxGroup: {
    name: string
    selectedValues: CheckboxGroupSelectedValues
    onChange: (
      selectedValues: CheckboxGroupSelectedValues,
      ev: React.ChangeEvent<HTMLInputElement>,
    ) => void
  }
}

export interface CheckboxProps {
  value: string | number
}

export class Checkbox extends React.Component<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static contextTypes = {
    checkboxGroup: PropTypes.object,
  }

  private _onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { checkboxGroup }: CheckboxGroupContext = this.context
    const nextSelectedValues = uniq(
      ev.target.checked
        ? [...checkboxGroup.selectedValues, this.props.value]
        : checkboxGroup.selectedValues.filter(
            (value) => value !== this.props.value,
          ),
    )
    checkboxGroup.onChange(nextSelectedValues, ev)
  }

  render() {
    const { checkboxGroup }: CheckboxGroupContext = this.context
    const checked = includes(checkboxGroup.selectedValues, this.props.value)

    return (
      <input
        {...this.props}
        type="checkbox"
        name={checkboxGroup.name}
        checked={checked}
        onChange={this._onChange}
      />
    )
  }
}

export interface CheckboxGroupProps {
  name: string
  selectedValues: CheckboxGroupSelectedValues
  onChange: (
    selectedValues: CheckboxGroupSelectedValues,
    ev: React.ChangeEvent<HTMLInputElement>,
  ) => void
  children: React.ReactNode
}

export class CheckboxGroup extends React.PureComponent<CheckboxGroupProps> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    selectedValues: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
  }

  static childContextTypes = {
    checkboxGroup: PropTypes.object,
  }

  getChildContext(): CheckboxGroupContext {
    const { name, selectedValues, onChange } = this.props
    return {
      checkboxGroup: {
        name,
        selectedValues,
        onChange,
      },
    }
  }

  render() {
    return this.props.children
  }
}
