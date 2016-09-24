import React, {Component, PropTypes} from 'react'

class Container extends Component{

  render = () => <div style={this.props.style}>{this.props.children}</div>
}

Container.propTypes = {
  style: PropTypes.object
}

export default Container;
