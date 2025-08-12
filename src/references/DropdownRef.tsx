import { useState } from "react";
import Dropdown from "../elements/Dropdown";
import type { DropdownOption } from "../elements/Dropdown/Dropdown.types";

const DropdownRef = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");
  const [loading, setLoading] = useState(false);

  const options: DropdownOption[] = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
    { label: "Option 5", value: "5" },
    { label: "Disabled Option", value: "disabled", disabled: true },
    { label: "With Icon", value: "icon", icon: "🎯" },
  ];

  const handleChange = (value: string | number) => {
    setSelectedValue(value);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            variant="contained"
            placeholder="Select from contained dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            variant="outlined"
            placeholder="Select from outlined dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            variant="text"
            placeholder="Select from text dropdown"
          />
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            color="primary"
            placeholder="Primary color"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            color="secondary"
            placeholder="Secondary color"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            color="error"
            placeholder="Error color"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            color="warning"
            placeholder="Warning color"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            color="info"
            placeholder="Info color"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            color="success"
            placeholder="Success color"
          />
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            size="small"
            placeholder="Small dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            size="medium"
            placeholder="Medium dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            size="large"
            placeholder="Large dropdown"
          />
        </div>
      </section>

      {/* Icons */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">With Icons</h2>
        <div className="space-y-4">
          <Dropdown
            options={[
              { label: "Rocket", value: "rocket", icon: "🚀" },
              { label: "Star", value: "star", icon: "⭐" },
              { label: "Heart", value: "heart", icon: "❤️" },
            ]}
            value={selectedValue}
            onChange={handleChange}
            placeholder="Select with icons"
          />
        </div>
      </section>

      {/* Loading States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Loading States
        </h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            loading={loading}
            placeholder="Loading dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            loading={true}
            placeholder="Always loading"
          />
        </div>
      </section>

      {/* Full Width */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            fullWidth
            placeholder="Full width dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="Full width outlined"
          />
        </div>
      </section>

      {/* Disabled States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Disabled States
        </h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            disabled
            placeholder="Disabled dropdown"
          />
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            disabled
            variant="outlined"
            placeholder="Disabled outlined"
          />
        </div>
      </section>

      {/* Searchable */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Searchable Dropdown
        </h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            searchable
            placeholder="Type to search..."
          />
        </div>
      </section>

      {/* Clearable */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Clearable Dropdown
        </h2>
        <div className="space-y-4">
          <Dropdown
            options={options}
            value={selectedValue}
            onChange={handleChange}
            clearable
            placeholder="Select and clear..."
          />
        </div>
      </section>

      {/* Custom Render */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Custom Render Options
        </h2>
        <div className="space-y-4">
          <Dropdown
            options={[
              { label: "John Doe", value: "john" },
              { label: "Jane Smith", value: "jane" },
              { label: "Bob Johnson", value: "bob" },
            ]}
            value={selectedValue}
            onChange={handleChange}
            renderOption={(option) => (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {option.label.charAt(0)}
                </div>
                <span>{option.label}</span>
              </div>
            )}
            placeholder="Select user..."
          />
        </div>
      </section>
    </>
  );
};

export default DropdownRef;
