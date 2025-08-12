import Button from "./elements/button";
import Card, { CardContent, CardHeader } from "./elements/card";

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Card>
        <CardHeader
          title="Card Title"
          subheader="Card Subtitle"
          avatar="🚀"
          action={<Button variant="text">Action</Button>}
        />

        <CardContent>
          <h3>Sample Card</h3>
          <p>This is a sample card content</p>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
