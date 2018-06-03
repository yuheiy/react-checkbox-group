# React Checkbox Group

Inspired by [React-radio-group](https://github.com/chenglou/react-radio-group). This is the checkbox version of it.

## Install

```bash
yarn add @yuheiy/react-checkbox-group
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { CheckboxGroup, Checkbox } from '@yuheiy/react-checkbox-group'

class Example extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedValues: ['first'],
    }
    this._onChange = this._onChange.bind(this)
  }

  _onChange(selectedValues) {
    this.setState({ selectedValues })
  }

  render() {
    return (
      <CheckboxGroup
        name="example"
        selectedValues={this.state.selectedValues}
        onChange={this._onChange}
      >
        <p>
          {['first', 'second', 'third'].map((value) => (
            <label>
              <Checkbox value={value} />
              {value}
            </label>
          ))}
        </p>
      </CheckboxGroup>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector('#example'))
```

## API

See [the type definitions](src/react-checkbox-group.tsx).
