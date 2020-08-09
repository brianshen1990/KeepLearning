
const List = (props) => {
  const [items, setItems] = React.useState(props.items);
  const click = (clickItem) => {
    setItems( [
      ...items.filter( item => clickItem === item ),
      ...items.filter( item => clickItem !== item ),
    ]);
  }
  return <ul>
    { items.map( item => <li key={item} onClick={ () => click(item) }>{item}</li> ) }
    </ul>;
}
window.onload = function () {

  document.body.innerHTML = "<div id='root'> </div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render( <List items={["A", "B", "C"]} />, rootElement);

  let listItem = document.querySelectorAll("li")[1];
  if ( listItem ) {
    listItem.click();
  }
  setTimeout(() => console.log( document.getElementById("root").innerHTML));
}