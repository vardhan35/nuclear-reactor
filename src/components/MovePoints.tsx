import React, { useState, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

interface MovePointProps {
  pointA?: Point;
  pointB?: Point;
  speed?: number;
}

const MovePoint: React.FC<MovePointProps> = ({
  pointA = { x: 0, y: 0 },
  pointB = { x: 0, y: 0 },
  speed = 1
}) => {
  const [position, setPosition] = useState<Point>(pointA);

  useEffect(() => {
    if (!pointA || !pointB) return; // Ensure pointA and pointB are defined

    const interval = setInterval(() => {
      const direction = {
        x: pointB.x - position.x,
        y: pointB.y - position.y
      };
      const distance = Math.sqrt(direction.x ** 2 + direction.y ** 2);

      if (distance < speed) {
        setPosition(pointB);
        clearInterval(interval);
        return;
      }

      const unitVector = {
        x: direction.x / distance,
        y: direction.y / distance
      };
      setPosition(prevPosition => ({
        x: prevPosition.x + unitVector.x * speed,
        y: prevPosition.y + unitVector.y * speed
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [pointA, pointB, position, speed]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '10px',
        height: '10px',
        backgroundColor: 'blue',
        borderRadius: '50%'
      }}
    ></div>
  );
};

export default MovePoint;
