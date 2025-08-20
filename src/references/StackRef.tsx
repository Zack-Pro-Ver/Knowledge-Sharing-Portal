import React from "react";
import Stack from "../elements/Stack";

export const StackRef: React.FC = () => {
  return (
    <Stack spacing={4} className="p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Stack Component Reference</h1>

      <Stack spacing={3}>
        <h2 className="text-xl font-semibold">Basic Usage</h2>

        {/* Vertical Stack */}
        <Stack spacing={2} className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium mb-2">Vertical Stack (default)</h3>
          <div className="bg-blue-50 p-3 rounded">Item 1</div>
          <div className="bg-blue-50 p-3 rounded">Item 2</div>
          <div className="bg-blue-50 p-3 rounded">Item 3</div>
        </Stack>

        {/* Horizontal Stack */}
        <Stack direction="row" spacing={3} className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium mb-2">Horizontal Stack</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Save
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
            Delete
          </button>
        </Stack>

        {/* Centered Stack */}
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
          className="p-4 border rounded-lg h-24"
        >
          <span className="text-gray-700">Centered Content</span>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
            Action
          </button>
        </Stack>

        {/* Different Spacing */}
        <Stack spacing={1} className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium mb-2">Small Spacing (1)</h3>
          <div className="bg-yellow-50 p-2 rounded">Tight spacing</div>
          <div className="bg-yellow-50 p-2 rounded">Between items</div>
        </Stack>

        <Stack spacing={6} className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium mb-2">Large Spacing (6)</h3>
          <div className="bg-orange-50 p-2 rounded">Loose spacing</div>
          <div className="bg-orange-50 p-2 rounded">Between items</div>
        </Stack>

        {/* Wrap Example */}
        <Stack
          direction="row"
          spacing={2}
          wrap="wrap"
          className="p-4 border rounded-lg"
        >
          <div className="bg-pink-50 p-3 rounded min-w-32">Item 1</div>
          <div className="bg-pink-50 p-3 rounded min-w-32">Item 2</div>
          <div className="bg-pink-50 p-3 rounded min-w-32">Item 3</div>
          <div className="bg-pink-50 p-3 rounded min-w-32">Item 4</div>
          <div className="bg-pink-50 p-3 rounded min-w-32">Item 5</div>
          <div className="bg-pink-50 p-3 rounded min-w-32">Item 6</div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StackRef;
