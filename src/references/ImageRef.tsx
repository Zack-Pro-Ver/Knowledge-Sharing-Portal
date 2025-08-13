import React from "react";
import Image from "../elements/Image";

const ImageRef = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Image Component Reference</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="Random image 1"
            size="medium"
            variant="rounded"
          />
          <Image
            src="https://picsum.photos/200/200?random=2"
            alt="Random image 2"
            size="medium"
            variant="circle"
          />
          <Image
            src="https://picsum.photos/200/200?random=3"
            alt="Random image 3"
            size="medium"
            variant="square"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Different Sizes</h2>
        <div className="flex items-end gap-4">
          <Image
            src="https://picsum.photos/100/100?random=4"
            alt="Small image"
            size="small"
            variant="rounded"
          />
          <Image
            src="https://picsum.photos/200/200?random=5"
            alt="Medium image"
            size="medium"
            variant="rounded"
          />
          <Image
            src="https://picsum.photos/300/300?random=6"
            alt="Large image"
            size="large"
            variant="rounded"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Object Fit Examples</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg mb-2">Cover</h3>
            <Image
              src="https://picsum.photos/400/300?random=7"
              alt="Cover fit"
              size="medium"
              variant="rounded"
              fit="cover"
            />
          </div>
          <div>
            <h3 className="text-lg mb-2">Contain</h3>
            <Image
              src="https://picsum.photos/400/300?random=8"
              alt="Contain fit"
              size="medium"
              variant="rounded"
              fit="contain"
            />
          </div>
          <div>
            <h3 className="text-lg mb-2">Fill</h3>
            <Image
              src="https://picsum.photos/400/300?random=9"
              alt="Fill fit"
              size="medium"
              variant="rounded"
              fit="fill"
            />
          </div>
          <div>
            <h3 className="text-lg mb-2">Error State</h3>
            <Image
              src="https://invalid-url.com/image.jpg"
              alt="Error example"
              size="medium"
              variant="rounded"
              fallback="Failed to load"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Placeholder</h2>
        <Image
          src="https://picsum.photos/200/200?random=10"
          alt="Custom placeholder"
          size="medium"
          variant="rounded"
          placeholder={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400">
              <span className="text-white font-bold">Loading...</span>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default ImageRef;
