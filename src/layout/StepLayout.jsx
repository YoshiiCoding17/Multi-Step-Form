import React from 'react'

export const StepLayout = ({children,title,description}) => {
  return (
    <div className="layout container-2">
        <h1 className="layout-title">{title}</h1>
        <p className="layout-description">{description}</p>
        {children}
    </div>
  )
}
