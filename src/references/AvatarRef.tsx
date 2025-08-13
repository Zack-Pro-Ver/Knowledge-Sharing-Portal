import { useState } from "react";
import Avatar from "../elements/Avatar";

const AvatarRef = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            variant="circular"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Circular Avatar"
          />
          <Avatar
            variant="rounded"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Rounded Avatar"
          />
          <Avatar
            variant="square"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Square Avatar"
          />
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            size="small"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Small Avatar"
          />
          <Avatar
            size="medium"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Medium Avatar"
          />
          <Avatar
            size="large"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Large Avatar"
          />
        </div>
      </section>

      {/* With Fallback */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Fallback States
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar size="medium" alt="Fallback Avatar">
            JD
          </Avatar>
          <Avatar size="medium" alt="Fallback Avatar" />
          <Avatar
            size="medium"
            src="https://invalid-url.com/image.jpg"
            alt="Broken Image"
          />
        </div>
      </section>

      {/* Clickable Avatars */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Clickable Avatars
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            size="medium"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Clickable Avatar"
            onClick={handleClick}
            className={clicked ? "ring-2 ring-blue-500" : ""}
          />
          <Avatar
            size="medium"
            variant="rounded"
            onClick={handleClick}
            className={clicked ? "ring-2 ring-blue-500" : ""}
          >
            Click
          </Avatar>
        </div>
      </section>

      {/* Custom Content */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Custom Content
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar size="medium" variant="circular">
            <span className="text-lg font-bold">A</span>
          </Avatar>
          <Avatar size="medium" variant="rounded">
            <span className="text-lg font-bold">B</span>
          </Avatar>
          <Avatar size="medium" variant="square">
            <span className="text-lg font-bold">C</span>
          </Avatar>
        </div>
      </section>

      {/* Mixed Examples */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Mixed Examples
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            size="small"
            variant="circular"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="User 1"
          />
          <Avatar
            size="medium"
            variant="rounded"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="User 2"
          />
          <Avatar
            size="large"
            variant="square"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="User 3"
          />
          <Avatar size="medium" variant="circular">
            +5
          </Avatar>
        </div>
      </section>
    </>
  );
};

export default AvatarRef;
