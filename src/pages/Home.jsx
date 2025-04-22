import React, { useState } from 'react'

const Home = () => {
  const [regno, setRegno] = useState('')
  const [student, setStudent] = useState(null)
  const [error, setError] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (!regno) {
      setError('Please enter a registration number')
      setStudent(null)
      return
    }
    const students = JSON.parse(localStorage.getItem('students')) || []
    const result = students.find(s => s.regno.toUpperCase() === regno.toUpperCase())
    if (result) {
      setStudent(result)
      setError('')
    } else {
      setStudent(null)
      setError('Student not found')
    }
  }

  return (
    <div>
      <h1>Welcome to Student Details Enquiry</h1>
      <p>Use the navigation bar to explore the website.</p>
      <section>
        <h2>Search Student Details by Registration Number</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter registration number"
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {student && (
          <div>
            <h3>Student Details</h3>
            <p><strong>Registration Number:</strong> {student.regno}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
          </div>
        )}
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>View student details</li>
          <li>Register new students</li>
          <li>Contact support</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
