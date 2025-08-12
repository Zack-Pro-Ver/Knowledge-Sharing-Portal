import Icon from "./elements/Icon";
import IconRef from "./references/iconRef";
function App() {
  return (
    <>
      <Icon size="medium" color="inherit">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>
      <IconRef />
    </>
  );
}

export default App;
