import React from 'react'
import ReactDOM from 'react-dom'
import { CheckboxGroup, Checkbox } from '../'

class Example extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      exampleSelectedValues: ['first'],
    }
    this._onChange = this._onChange.bind(this)
  }

  _onChange(selectedValues, ev) {
    console.log(selectedValues, ev)
    this.setState({ [`${ev.target.name}SelectedValues`]: selectedValues })
  }

  render() {
    return (
      <CheckboxGroup
        name="example"
        selectedValues={this.state.exampleSelectedValues}
        onChange={this._onChange}
      >
        <p>
          {['first', 'second', 'third', 100].map((value) => (
            <React.Fragment key={value}>
              <label>
                <Checkbox value={value} />
                {value}
              </label>
              <span>, </span>
            </React.Fragment>
          ))}
          <label>
            <Checkbox value={100} />
            100
          </label>
        </p>
      </CheckboxGroup>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
