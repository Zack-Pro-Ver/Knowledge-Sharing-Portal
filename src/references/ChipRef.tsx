import React from "react";
import Chip from "../elements/Chip";

const ChipRef = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Chip Component Reference</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip label="Default Chip" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip label="Default" variant="default" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Filled" variant="filled" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip label="Small" size="small" />
          <Chip label="Medium" size="medium" />
          <Chip label="Large" size="large" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip
            label="With Icon"
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <Chip
            label="Deletable"
            onDelete={() => console.log("Deleted")}
            color="primary"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Clickable</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip
            label="Clickable"
            onClick={() => alert("Chip clicked!")}
            color="primary"
          />
          <Chip
            label="Clickable & Deletable"
            onClick={() => alert("Chip clicked!")}
            onDelete={() => alert("Deleted")}
            color="primary"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip label="Disabled" disabled />
          <Chip label="Disabled Primary" color="primary" disabled />
        </div>
      </section>
    </div>
  );
};

export default ChipRef;
