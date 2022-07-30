import React from 'react'

export default function Alerts(props) {
  return (
    
props.alertt && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

