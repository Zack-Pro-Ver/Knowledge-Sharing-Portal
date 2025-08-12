import React from "react";
import Link from "../elements/Link";

const LinkRef = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Link Component Reference</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#" variant="default">
            Default Link
          </Link>
          <Link href="#" variant="primary">
            Primary Link
          </Link>
          <Link href="#" variant="secondary">
            Secondary Link
          </Link>
          <Link href="#" variant="error">
            Error Link
          </Link>
          <Link href="#" variant="warning">
            Warning Link
          </Link>
          <Link href="#" variant="info">
            Info Link
          </Link>
          <Link href="#" variant="success">
            Success Link
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Link href="#" size="small">
            Small Link
          </Link>
          <Link href="#" size="medium">
            Medium Link
          </Link>
          <Link href="#" size="large">
            Large Link
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Underline Styles</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#" underline="none">
            No Underline
          </Link>
          <Link href="#" underline="hover">
            Underline on Hover
          </Link>
          <Link href="#" underline="always">
            Always Underlined
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#">Normal Link</Link>
          <Link href="#" disabled>
            Disabled Link
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">External Link</h3>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            External Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkRef;
