import { useState } from "react";
import TextField from "../elements/TextField";

const TextFieldRef = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    // Simple validation example
    if (newValue.length < 3) {
      setError(true);
      setHelperText("Please enter at least 3 characters");
    } else {
      setError(false);
      setHelperText("");
    }
  };

  return (
    <>
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            variant="outlined"
            label="Outlined"
            placeholder="Enter text..."
            value={value}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            label="Filled"
            placeholder="Enter text..."
            value={value}
            onChange={handleChange}
          />
          <TextField
            variant="standard"
            label="Standard"
            placeholder="Enter text..."
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            color="primary"
            label="Primary"
            placeholder="Primary color"
            value={value}
            onChange={handleChange}
          />
          <TextField
            color="secondary"
            label="Secondary"
            placeholder="Secondary color"
            value={value}
            onChange={handleChange}
          />
          <TextField
            color="error"
            label="Error"
            placeholder="Error color"
            value={value}
            onChange={handleChange}
          />
          <TextField
            color="warning"
            label="Warning"
            placeholder="Warning color"
            value={value}
            onChange={handleChange}
          />
          <TextField
            color="info"
            label="Info"
            placeholder="Info color"
            value={value}
            onChange={handleChange}
          />
          <TextField
            color="success"
            label="Success"
            placeholder="Success color"
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            size="small"
            label="Small"
            placeholder="Small size"
            value={value}
            onChange={handleChange}
          />
          <TextField
            size="medium"
            label="Medium"
            placeholder="Medium size"
            value={value}
            onChange={handleChange}
          />
          <TextField
            size="medium"
            label="Medium"
            placeholder="Medium size"
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* With Adornments */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">With Adornments</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            label="With Start Adornment"
            startAdornment="💰"
            placeholder="Enter amount"
            value={value}
            onChange={handleChange}
          />
          <TextField
            label="With End Adornment"
            endAdornment="@gmail.com"
            placeholder="Enter username"
            value={value}
            onChange={handleChange}
          />
          <TextField
            label="With Both Adornments"
            startAdornment="🔍"
            endAdornment="Search"
            placeholder="Enter search term"
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Error States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Error States</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            label="With Error"
            error={true}
            helperText="This field has an error"
            value={value}
            onChange={handleChange}
          />
          <TextField
            label="With Validation"
            error={error}
            helperText={helperText}
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Disabled States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Disabled States</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            label="Disabled"
            disabled
            placeholder="Cannot edit"
            value="Disabled value"
            onChange={handleChange}
          />
          <TextField
            label="Disabled with Value"
            disabled
            value="This is disabled"
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Full Width */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
        <div className="space-y-4">
          <TextField
            fullWidth
            label="Full Width TextField"
            placeholder="This takes full width"
            value={value}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Full Width with Helper"
            helperText="This is a full width text field"
            placeholder="Enter text..."
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Required Field */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Required Field</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            required
            label="Required Field"
            placeholder="This field is required"
            value={value}
            onChange={handleChange}
          />
          <TextField
            required
            label="Required with Asterisk"
            placeholder="Required field"
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Password Type */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Password Type</h2>
        <div className="flex flex-wrap gap-4">
          <TextField
            type="password"
            label="Password"
            placeholder="Enter password"
            value={value}
            onChange={handleChange}
          />
          <TextField
            type="email"
            label="Email"
            placeholder="Enter email"
            value={value}
            onChange={handleChange}
          />
          <TextField
            type="number"
            label="Number"
            placeholder="Enter number"
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>
    </>
  );
};

export default TextFieldRef;
