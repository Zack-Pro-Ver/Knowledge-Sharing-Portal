import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./index";

// Example usage of the Card component
export const CardUsageExample: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Card Component Examples</h1>

      {/* Basic Card */}
      <Card>
        <CardHeader
          title="Basic Card"
          subheader="This is a basic card with header and content"
        />
        <CardContent>
          <p>This is the content of the card. You can put any content here.</p>
        </CardContent>
      </Card>

      {/* Card with Avatar */}
      <Card variant="outlined" size="large">
        <CardHeader
          title="Card with Avatar"
          subheader="User Profile Card"
          avatar={<span>👤</span>}
          action={<button className="text-blue-600">Edit</button>}
        />
        <CardContent>
          <p>This card has an avatar and action button in the header.</p>
          <p className="mt-2">It uses the outlined variant with large size.</p>
        </CardContent>
        <CardFooter>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Save
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
            Cancel
          </button>
        </CardFooter>
      </Card>

      {/* Elevated Card */}
      <Card variant="elevation" elevation={3} raised>
        <CardHeader title="Elevated Card" subheader="With raised effect" />
        <CardContent>
          <p>This card has elevation and raised effect on hover.</p>
        </CardContent>
      </Card>

      {/* Small Card */}
      <Card size="small">
        <CardHeader title="Small Card" subheader="Compact size" />
        <CardContent>
          <p>This is a small sized card.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardUsageExample;
