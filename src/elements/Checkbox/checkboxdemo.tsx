import  { useState } from "react";
import Checkbox from "./checkbox"

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}
export default MyComponent;