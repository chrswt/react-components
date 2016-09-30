var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )} 
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }

    onListItemEnter() {
      this.setState({
        hover: true
      });
    }

    onListItemLeave() {
      this.setState({
        hover: false
      });
    }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}
        onMouseOver={this.onListItemEnter.bind(this)}
        onMouseLeave={this.onListItemLeave.bind(this)}>
        {this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
