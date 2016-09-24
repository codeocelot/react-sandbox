import React, {Component, PropTypes} from 'react'

class Controls extends Component{

  render = () => (
    <div>
      <h1>Controls</h1>
      <input type="text" placeholder="Height"/>
      <input type="text" placeholder="width"/>
    </div>
  )
}

Controls.propTypes = {

}

export default Controls
