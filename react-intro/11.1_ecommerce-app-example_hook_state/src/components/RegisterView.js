import React from 'react'

export default function RegisterView(props) {

  function register(event)
  {
    event.preventDefault();
    props.storeUserInfo(
      event.target['name'].value,
      event.target['streetAddress'].value,
      event.target['city'].value,
      event.target['email'].value,
    );
    props.history.goBack();
  }

  function cancel(event)
  {
    event.preventDefault();
    props.history.goBack();
  }

  return (
    <div>
      <form onSubmit={ register }>
        <div>
          Name
        </div>
        <input type="text" name="name" />

        <div>
          Street Address
        </div>
        <input type="text" name="streetAddress" />

        <div>
          City
        </div>
        <input type="text" name="city" />

        <div>
          email
        </div>
        <input type="text" name="email" />

        <button onClick={ cancel }>Cancel</button>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
