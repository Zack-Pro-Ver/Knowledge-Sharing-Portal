import { useState } from "react";
import IconButton from "../elements/IconButtonRenaming";

const IconButtonRef = () => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 2000);
  };

  return (
    <>
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton variant="contained" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton variant="outlined" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton variant="text" onClick={handleClick}>
            🏠
          </IconButton>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton color="primary" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton color="secondary" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton color="error" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton color="warning" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton color="info" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton color="success" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton color="inherit" onClick={handleClick}>
            🏠
          </IconButton>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton size="small" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton size="medium" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton size="large" onClick={handleClick}>
            🏠
          </IconButton>
        </div>
      </section>

      {/* Edge positioning */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Edge Positioning</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton edge="start" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton edge="end" onClick={handleClick}>
            🏠
          </IconButton>
        </div>
      </section>

      {/* Disabled States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Disabled States
        </h2>
        <div className="flex flex-wrap gap-4">
          <IconButton disabled onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton disabled variant="outlined" onClick={handleClick}>
            🏠
          </IconButton>
          <IconButton disabled variant="text" onClick={handleClick}>
            🏠
          </IconButton>
        </div>
      </section>
    </>
  );
};

export default IconButtonRef;
