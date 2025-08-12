import React from "react";
import Card, { CardHeader, CardContent, CardFooter } from "../elements/card";

const CardRef = () => {
  return (
    <>
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="elevation" className="max-w-sm">
            <CardHeader title="Elevation Variant" subheader="Default shadow" />
            <CardContent>
              <p>
                This card uses elevation variant with default shadow styling.
              </p>
            </CardContent>
          </Card>

          <Card variant="outlined" className="max-w-sm">
            <CardHeader title="Outlined Variant" subheader="Border styling" />
            <CardContent>
              <p>This card uses outlined variant with border styling.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card size="small" className="max-w-xs">
            <CardHeader title="Small Card" />
            <CardContent>
              <p className="text-sm">
                This is a small sized card with compact spacing.
              </p>
            </CardContent>
          </Card>

          <Card size="medium" className="max-w-sm">
            <CardHeader title="Medium Card" />
            <CardContent>
              <p>This is a medium sized card with standard spacing.</p>
            </CardContent>
          </Card>

          <Card size="large" className="max-w-md">
            <CardHeader title="Large Card" />
            <CardContent>
              <p>This is a large sized card with generous spacing.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Elevation Levels */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Elevation Levels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card elevation={1} className="max-w-sm">
            <CardHeader title="Elevation 1" subheader="Subtle shadow" />
            <CardContent>
              <p>Minimal shadow effect for subtle depth.</p>
            </CardContent>
          </Card>

          <Card elevation={3} className="max-w-sm">
            <CardHeader title="Elevation 3" subheader="Medium shadow" />
            <CardContent>
              <p>Medium shadow effect for moderate depth.</p>
            </CardContent>
          </Card>

          <Card elevation={6} className="max-w-sm">
            <CardHeader title="Elevation 6" subheader="Strong shadow" />
            <CardContent>
              <p>Strong shadow effect for maximum depth.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Raised State */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Raised State
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card elevation={2} className="max-w-sm">
            <CardHeader title="Normal Card" subheader="Standard elevation" />
            <CardContent>
              <p>This card has standard elevation without raised state.</p>
            </CardContent>
          </Card>

          <Card elevation={2} raised className="max-w-sm">
            <CardHeader title="Raised Card" subheader="Enhanced elevation" />
            <CardContent>
              <p>
                This card is in raised state with enhanced elevation effect.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* With Avatar */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          With Avatar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="max-w-sm">
            <CardHeader
              title="John Doe"
              subheader="Software Engineer"
              avatar={
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
              }
            />
            <CardContent>
              <p>Card with avatar in the header section.</p>
            </CardContent>
          </Card>

          <Card className="max-w-sm">
            <CardHeader
              title="Jane Smith"
              subheader="Product Manager"
              avatar={
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
              }
              action={
                <button className="text-gray-500 hover:text-gray-700">⋮</button>
              }
            />
            <CardContent>
              <p>Card with avatar and action button in header.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* With Actions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          With Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="max-w-sm">
            <CardHeader title="Action Card" subheader="With footer actions" />
            <CardContent>
              <p>This card includes action buttons in the footer section.</p>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Save
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                  Cancel
                </button>
              </div>
            </CardFooter>
          </Card>

          <Card className="max-w-sm">
            <CardHeader
              title="Interactive Card"
              subheader="With header action"
              action={
                <button className="text-blue-500 hover:text-blue-700">
                  Edit
                </button>
              }
            />
            <CardContent>
              <p>
                This card has an action button in the header and footer actions.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Last updated 2 hours ago
                </span>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Complex Content */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Complex Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="max-w-sm">
            <CardHeader
              title="Product Card"
              subheader="Premium Package"
              avatar={
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  $
                </div>
              }
            />
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Unlimited storage</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  $99/month
                </span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                  Upgrade
                </button>
              </div>
            </CardFooter>
          </Card>

          <Card className="max-w-sm">
            <CardHeader
              title="User Profile"
              subheader="Team Member"
              avatar={
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  AL
                </div>
              }
            />
            <CardContent>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="text-sm text-gray-600">alice@example.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <p className="text-sm text-gray-600">Senior Developer</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <p className="text-sm text-gray-600">Engineering</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                  Message
                </button>
                <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  View Profile
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CardRef;
