import React, { useState } from 'react'
import './RequestForm.css'

export const RequestForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    setFirstNameError(firstName ? '' : 'First Name field is required')
    setLastNameError(lastName ? '' : 'Last Name field is required')
    setEmailError(email ? '' : 'Email field is required')

    if (firstName && lastName && email) {
      setSubmitted(true)
    }
  }

  return submitted ? (
    <p id="submissionConfirmationText">
      Thank you! We will be in touch with you shortly.
    </p>
  ) : (
    <form className="requestForm" onSubmit={handleSubmit}>
      <div className={`formGroup${firstNameError ? ' error' : ''}`}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          id="firstName"
          data-testid="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      {firstNameError && (
        <p className="errorMessage" id="firstNameError">
          {firstNameError}
        </p>
      )}
      <div className={`formGroup${lastNameError ? ' error' : ''}`}>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          id="lastName"
          data-testid="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      {lastNameError && (
        <p className="errorMessage" id="lastNameError">
          {lastNameError}
        </p>
      )}
      <div className={`formGroup${emailError ? ' error' : ''}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {emailError && (
        <p className="errorMessage" id="emailError">
          {emailError}
        </p>
      )}
      <button type="submit" id="requestDemo">
        Request Demo
      </button>
    </form>
  )
}
