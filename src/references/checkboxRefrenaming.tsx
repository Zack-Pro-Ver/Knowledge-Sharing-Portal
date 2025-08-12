import { useState } from "react";
import Checkbox from "../elements/checkboxrenaming";

const CheckboxRef = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setIndeterminate(false);
  };

  const toggleIndeterminate = () => {
    setIndeterminate(!indeterminate);
    setChecked(false);
  };

  return (
    <>
      {/* Basic Checkbox */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Checkbox</h2>
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          label="Accept terms and conditions"
        />
      </section>

      {/* Indeterminate Checkbox */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Indeterminate Checkbox</h2>
        <Checkbox
          indeterminate={indeterminate}
          checked={checked}
          onChange={handleCheckboxChange}
          label="Select all"
        />
        <button
          className="ml-4 px-3 py-1 bg-blue-600 text-white rounded"
          onClick={toggleIndeterminate}
        >
          Toggle Indeterminate
        </button>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="flex gap-4">
          <Checkbox checkboxSize="small" label="Small" />
          <Checkbox checkboxSize="medium" label="Medium" />
          <Checkbox checkboxSize="large" label="Large" />
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="flex gap-4 flex-wrap">
          <Checkbox color="primary" label="Primary" />
          <Checkbox color="secondary" label="Secondary" />
          <Checkbox color="error" label="Error" />
          <Checkbox color="warning" label="Warning" />
          <Checkbox color="info" label="Info" />
          <Checkbox color="success" label="Success" />
          <Checkbox color="default" label="Default" />
        </div>
      </section>

      {/* Disabled */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Disabled</h2>
        <div className="flex gap-4">
          <Checkbox disabled label="Disabled" />
          <Checkbox disabled checked label="Disabled Checked" />
        </div>
      </section>
    </>
  );
};

export default CheckboxRef;
