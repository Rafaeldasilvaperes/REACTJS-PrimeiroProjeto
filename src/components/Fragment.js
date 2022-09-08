import React from 'react'

export const Fragment = ({propsFragment}) => {
  return (
    <>
      <h2>Primeiro Título</h2>
      <h3>Segundo Título</h3>
      <h3>{propsFragment}</h3>
    </>
  )
}
