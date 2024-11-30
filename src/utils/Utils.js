import React from 'react';
import "../assests/styles/Utils.scss";

const DefaultButton = ({text}) => {
  return (
    <button className='default__btn'>
      {text}
    </button>
  )
}

const Container = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export { DefaultButton, Container }