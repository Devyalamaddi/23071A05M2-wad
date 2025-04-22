import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    regno: '',
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.regno || !formData.name || !formData.email || !formData.password) {
      alert('Please fill all fields')
      return
    }
    // Get existing students from localStorage or initialize empty array
    const existingStudents = JSON.parse(localStorage.getItem('students')) || []
    // Check if regno already exists
    const regnoExists = existingStudents.some(student => student.regno === formData.regno)
    if (regnoExists) {
      alert('Registration number already exists. Please use a different one.')
      return
    }
    // Add new student to array
    existingStudents.push(formData)
    // Save updated array to localStorage
    localStorage.setItem('students', JSON.stringify(existingStudents))
    alert('Registration successful! Please login.')
    navigate('/login')
  }

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="regno">Registration Number:</label>
          <input
            type="text"
            id="regno"
            name="regno"
            value={formData.regno}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration
