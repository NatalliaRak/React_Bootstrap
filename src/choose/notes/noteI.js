import React from "react";




export default class NotesI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const style={
      background: 'linear-gradient(90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)',
      filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#F4F269", endColorstr="#5CB270", GradientType=1 )',
    }
    const center={
      textAlign:'center'
    }
    return (
      <div>
        <h3 style={style}>Notes</h3>
        <NoteList items={this.state.items} />
        <form onSubmit={this.handleSubmit} style={center}>
          <label htmlFor="new-note">
            Notes about Iceland
          </label>
          <br/><br/>
          <input
            id="new-note"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br/><br/>
          <button variant="warning">
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}