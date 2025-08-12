import React from "react";
import Label from "../elements/label";

const LabelRef = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="space-y-4">
          <div>
            <Label variant="default">Default Label</Label>
          </div>
          <div>
            <Label variant="outlined">Outlined Label</Label>
          </div>
          <div>
            <Label variant="filled">Filled Label</Label>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="space-y-4">
          <div>
            <Label color="primary">Primary Label</Label>
          </div>
          <div>
            <Label color="secondary">Secondary Label</Label>
          </div>
          <div>
            <Label color="error">Error Label</Label>
          </div>
          <div>
            <Label color="warning">Warning Label</Label>
          </div>
          <div>
            <Label color="info">Info Label</Label>
          </div>
          <div>
            <Label color="success">Success Label</Label>
          </div>
          <div>
            <Label color="inherit">Inherit Label</Label>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="space-y-4">
          <div>
            <Label size="small">Small Label</Label>
          </div>
          <div>
            <Label size="medium">Medium Label</Label>
          </div>
          <div>
            <Label size="large">Large Label</Label>
          </div>
        </div>
      </section>

      {/* Required */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Required</h2>
        <div className="space-y-4">
          <div>
            <Label required>Required Label</Label>
          </div>
          <div>
            <Label required color="error">
              Required Error Label
            </Label>
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Disabled</h2>
        <div className="space-y-4">
          <div>
            <Label disabled>Disabled Label</Label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabelRef;
