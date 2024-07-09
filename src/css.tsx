import React from 'react';

interface YeonProperties {
  h1TextNode: string;
  styles: React.CSSProperties;
}
let style: React.CSSProperties = {
  color: 'blue',
  backgroundColor: 'yelow',
  fontSize: '48px',
};

const Yeon: React.FC<YeonProperties> = ({ h1TextNode, styles }) => {
  return (
    <div>
      <h1 style={style}>{h1TextNode}</h1>
    </div>
  );
};

export = Yeon;
