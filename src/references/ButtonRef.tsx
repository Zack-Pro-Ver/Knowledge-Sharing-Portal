import { useState } from "react";
import Button from "../elements/Button";

const ButtonRef = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="contained" onClick={handleClick}>
            Contained
          </Button>
          <Button variant="outlined" onClick={handleClick}>
            Outlined
          </Button>
          <Button variant="text" onClick={handleClick}>
            Text
          </Button>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="flex flex-wrap gap-4">
          <Button color="primary" onClick={handleClick}>
            Primary
          </Button>
          <Button color="secondary" onClick={handleClick}>
            Secondary
          </Button>
          <Button color="error" onClick={handleClick}>
            Error
          </Button>
          <Button color="warning" onClick={handleClick}>
            Warning
          </Button>
          <Button color="info" onClick={handleClick}>
            Info
          </Button>
          <Button color="success" onClick={handleClick}>
            Success
          </Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="small" onClick={handleClick}>
            Small
          </Button>
          <Button size="medium" onClick={handleClick}>
            Medium
          </Button>
          <Button size="large" onClick={handleClick}>
            Large
          </Button>
        </div>
      </section>

      {/* Icons */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button startIcon="🚀" onClick={handleClick}>
            Launch
          </Button>
          <Button endIcon="➡️" onClick={handleClick}>
            Next
          </Button>
          <Button startIcon="💾" endIcon="✓" onClick={handleClick}>
            Save
          </Button>
        </div>
      </section>

      {/* Loading States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Loading States
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button loading={loading} onClick={handleClick}>
            Click to Load
          </Button>
          <Button loading={true} onClick={handleClick}>
            Always Loading
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
        <div className="space-y-4">
          <Button fullWidth onClick={handleClick}>
            Full Width Button
          </Button>
          <Button fullWidth variant="outlined" onClick={handleClick}>
            Full Width Outlined
          </Button>
        </div>
      </section>

      {/* Disabled States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Disabled States
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled onClick={handleClick}>
            Disabled
          </Button>
          <Button disabled variant="outlined" onClick={handleClick}>
            Disabled Outlined
          </Button>
          <Button disabled loading onClick={handleClick}>
            Disabled Loading
          </Button>
        </div>
      </section>
    </>
  );
};

export default ButtonRef;
