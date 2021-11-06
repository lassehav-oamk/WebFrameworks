import React from 'react'

export default function LoadingSpinner({ isLoading, children }) {
  return (
    isLoading ? (<div className="spinner-border" role="status"></div>) : children
  )
}