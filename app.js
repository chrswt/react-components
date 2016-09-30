var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));
