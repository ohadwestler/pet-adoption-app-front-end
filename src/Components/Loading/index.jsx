import React from 'react'
import { Spinner } from "react-bootstrap";
import './styles.css'

function Loading() {
  return (
    <div className="spinner_overlay">
      <Spinner animation="grow" variant="secondary" className="spinner_loading text-light" />
    </div>
  )
}

export default Loading
