import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {setProp, addProp, removeProp} from '../../redux/actions/props'

// const Prop = ({name,value,type,onChange}) => {
//   this.handleChange = (evt) => onChange(name,{value: evt.target.value, type: })
//   return (<div>
//     <input type={type} name={name}/>
//     <label htmlFor={name}>{name}</label>
//   </div> )
// }

class Prop extends Component{
  handleUpdateValue = (evt) => {
    const newValue = evt.target.value;
    this.props.handleUpdate(this.props.index, {
      name: this.props.name,
      value: newValue,
      type: this.props.type
    });
  }
  handleUpdateType = (evt) => {
    const newType = evt.target.value;
    this.props.handleUpdate(this.props.index, {
      name: this.props.name,
      value: this.props.value,
      type: newType
    })
  }
  handleUpdateName = (evt) => {
    const newName = evt.target.value;
    this.props.handleUpdate(this.props.index, {
      name: newName,
      value: this.props.value,
      type: this.props.type
    })
  }
  render = () => {
    return (<div>
      <input type={"text"}
        name="name"
        onChange={this.handleUpdateName}
        value={this.props.name}/>
      <input type={this.props.type}
        name={this.props.name}
        onChange={this.handleUpdateValue}
        value={this.props.value}
        />
      <select onChange={this.handleUpdateType}>
        <option value={"text"}> Text </option>
        <option value={"func"}> Function </option>
      </select>
      <label htmlFor={this.props.name}>{this.props.name}</label>
      <button type="button" onClick={()=>this.props.removeProp(this.props.index)}>
        Delete
      </button>
    </div> )
  }
}

export class Inputs extends Component{
  handleUpdate = (index,val) => this.props.updateProp(index,val)
  handleAddProp = () => {
    this.props.addProp('newProp',{})
  }
  render = () => {
    const propEntries = this.props.props.map(
      (prop,index) => <Prop handleUpdate={this.handleUpdate}
        index={index}
        removeProp={() => this.props.removeProp(index)}
        {...prop}/>
    );
    return (<div>
      <div className="prop-controls">
        <button type="button" onClick={this.handleAddProp}>Add</button>
      </div>
      <div className="prop-entries">
        { propEntries }
      </div>
    </div>
    )
  }
}

Inputs.propTypes = {

}

const mapStateToProps = (state) => ({
  props: state.props
});

const mapDispatchToProps = (dispatch) => ({
  updateProp: (name,val) => dispatch(setProp(name,val)),
  addProp: (name,val) => dispatch(addProp(name,val)),
  removeProp: (index) => dispatch(removeProp(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inputs)
