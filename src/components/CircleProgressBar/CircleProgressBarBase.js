import React, { useState, useEffect } from 'react';

const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954',
  width: '100px',
  height: '100px',
  strokeWidth: 5
};

const CircleProgressBarBase = ({
  className,
  trailStrokeColor,
  strokeColor,
  percentage,
  innerText,
}) => {
  const [progressBar, setProgressBar] = useState(0);

  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
      
    }, 5);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) updatePercentage();
  }, [progressBar]);


  return (
    <figure style={{marginLeft: '0'}} className={className}>
      <svg width={circleConfig.width} viewBox={circleConfig.viewBox}>
        <circle
          className="ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={trailStrokeColor}
          strokeWidth={circleConfig.strokeWidth}
        />

        <circle
          className="path"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={strokeColor}
          strokeDasharray={`${progressBar} ${100 - progressBar}`}
          strokeDashoffset={INITIAL_OFFSET}
          strokeWidth={circleConfig.strokeWidth}

        />
        <g className="circle-label">
          {/* <text x="50%" y="50%" className="circle-percentage">
                  {percentage}%
                </text> */}
          <text x="50%" y="50%" className="circle-text">
            {innerText}
          </text>
        </g>
      </svg>
    </figure>
  );
};

export default CircleProgressBarBase;
