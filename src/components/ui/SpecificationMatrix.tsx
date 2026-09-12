import React from 'react';
import { VerifiedTextile } from '@/lib/seed-data';

interface SpecificationMatrixProps {
  textile: VerifiedTextile;
}

export function SpecificationMatrix({ textile }: SpecificationMatrixProps) {
  const specs = [
    { label: 'Internal Code', value: textile.code },
    { label: 'Weave Structure', value: textile.weave },
    { label: 'Yarn Count & Type', value: textile.yarnCount },
    { label: 'Cloth Width', value: textile.width },
    { label: 'Weight / GSM', value: textile.gsm || 'Available upon testing batch' },
    { label: 'Finish & State', value: textile.finish },
    { label: 'Lead Time', value: textile.leadTime },
    { label: 'B2B Minimum Order (MOQ)', value: textile.b2bMoq },
    { label: 'Suggested Uses', value: textile.suggestedApplications },
  ];

  return (
    <div className="spec-box">
      <div className="spec-grid">
        {specs.map((item, idx) => (
          <div key={idx} className="spec-item">
            <span className="spec-label">{item.label}</span>
            <span className="spec-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
