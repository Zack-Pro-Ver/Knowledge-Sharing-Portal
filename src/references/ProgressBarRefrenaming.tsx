import React from 'react';
import ProgressBar from '../elements/ProgressBar';

const ProgressBarRef = () => {
  return (
    <>
      {/* Progress Values */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress Values</h2>
        <div className="space-y-4">
          <ProgressBar progress={0} />
          <ProgressBar progress={50} />
          <ProgressBar progress={100} />
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="space-y-4">
          <ProgressBar progress={50} size="small" />
          <ProgressBar progress={50} size="medium" />
          <ProgressBar progress={50} size="large" />
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
        <div className="space-y-4">
          <ProgressBar progress={50} color="primary" />
          <ProgressBar progress={50} color="secondary" />
          <ProgressBar progress={50} color="error" />
          <ProgressBar progress={50} color="warning" />
          <ProgressBar progress={50} color="info" />
          <ProgressBar progress={50} color="success" />
        </div>
      </section>

      {/* Full Width */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
        <div className="space-y-4">
          <ProgressBar progress={75} fullWidth />
          <ProgressBar progress={25} fullWidth color="error" />
        </div>
      </section>
    </>
  );
};

export default ProgressBarRef;
