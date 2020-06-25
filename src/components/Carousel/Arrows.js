import React from 'react'

function NextArrow(props) {
  const { className, style, onClick } = props;
  const iconStyle = {
    height: '64px', 
    width: '100px', 
    color: '#FFD197', 
    opacity: 0.8,
  }
  const divStyle = {
    ...style, 
    height: '64px', 
    width: '100px', 
    background: "rgba(0, 0, 0, 0.4)", 
    display: "flex", 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: '5px',
    top: '30%'
  }

  return (
    <div
      className={className}
      style={divStyle}
      onClick={onClick}
    >
      <i style={iconStyle} className='flaticon-next'></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const iconStyle = {
    height: '64px', 
    width: '100px', 
    color: '#FFD197', 
    opacity: 0.8,
  }
  const divStyle = {
    ...style, 
    height: '64px', 
    width: '100px', 
    zIndex: '1', 
    background: "rgba(0, 0, 0, 0.4)", 
    display: "flex", 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: '5px' ,
    top: '30%'
  }

  return (
    <div
      className={className}
      style={divStyle}
      onClick={onClick}
    >
      <i style={iconStyle} className='flaticon-prev'></i>
    </div>
  );
}

export {NextArrow, PrevArrow}
