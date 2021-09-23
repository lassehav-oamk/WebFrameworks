import React from 'react'

export default function ProfileView(props) {
  return (
    <div>
      <h1>User Information</h1>
      <div>
        { props.userInfo.name }
      </div>
      <div>
        { props.userInfo.address }
      </div>
      <div>
        { props.userInfo.city }
      </div>
      <div>
        { props.userInfo.email }
      </div>
      <div>
        <button onClick={ () => props.history.goBack() }>Go back</button>
      </div>
    </div>
  )
}
