import React, { useState } from 'react'
import './ContactForm.css'
import EntechLogo from '../../assets/EntechLogo.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    buildingType: '',
    address: '',
    primaryContactName: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    countryCode: '+1',
    servicesRequested: [],
    fileUpload: null,
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (name === 'servicesRequested') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({
      ...prev,
      fileUpload: file
    }))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    setFormData(prev => ({
      ...prev,
      fileUpload: file
    }))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleFileButtonClick = () => {
    document.getElementById('fileUpload').click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <div className="logo">
          <img src={EntechLogo} alt="En-Tech Associates, Inc." className="logo-image" />
        </div>
        <h2>Prefer we contact you?</h2>
        <p>Please fill in the form below and submit for a call-back today.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="projectName">Project Name *</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            placeholder="Enter project name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="buildingType">Building Type *</label>
          <select
            id="buildingType"
            name="buildingType"
            value={formData.buildingType}
            onChange={handleChange}
            required
          >
            <option value="">Select building type</option>
            <option value="1-4-family">1–4 Family</option>
            <option value="multifamily">Multifamily</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address / Location *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter project address or location"
          />
        </div>

        <div className="form-section">
          <h3 className="section-title">Primary Contact</h3>
          
          <div className="form-group">
            <label htmlFor="primaryContactName">Name *</label>
            <input
              type="text"
              id="primaryContactName"
              name="primaryContactName"
              value={formData.primaryContactName}
              onChange={handleChange}
              required
              placeholder="Full name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="primaryContactEmail">Email *</label>
              <input
                type="email"
                id="primaryContactEmail"
                name="primaryContactEmail"
                value={formData.primaryContactEmail}
                onChange={handleChange}
                required
                placeholder="email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="primaryContactPhone">Phone *</label>
              <div className="phone-input">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="country-code"
                >
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  name="primaryContactPhone"
                  value={formData.primaryContactPhone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="checkbox-group">
          <label>Services Requested *</label>
          <div className="checkbox-options">
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="diagnostics"
                checked={formData.servicesRequested.includes('diagnostics')}
                onChange={handleChange}
              />
              <span>Diagnostics</span>
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="mechanical-code-review"
                checked={formData.servicesRequested.includes('mechanical-code-review')}
                onChange={handleChange}
              />
              <span>Mechanical Code Review</span>
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="shell-upgrades"
                checked={formData.servicesRequested.includes('shell-upgrades')}
                onChange={handleChange}
              />
              <span>Shell Upgrades</span>
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="hvac-design"
                checked={formData.servicesRequested.includes('hvac-design')}
                onChange={handleChange}
              />
              <span>HVAC Design</span>
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="iaq-erv"
                checked={formData.servicesRequested.includes('iaq-erv')}
                onChange={handleChange}
              />
              <span>IAQ / ERV</span>
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="rtem"
                checked={formData.servicesRequested.includes('rtem')}
                onChange={handleChange}
              />
              <span>RTEM</span>
            </label>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name="servicesRequested"
                value="other"
                checked={formData.servicesRequested.includes('other')}
                onChange={handleChange}
              />
              <span>Other</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="fileUpload">File Upload</label>
          <div 
            className="file-upload-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              onChange={handleFileChange}
              className="file-input"
              multiple
            />
            <div className="file-upload-content">
              <div className="file-upload-icon">📁</div>
              <p className="file-upload-text">
                {formData.fileUpload 
                  ? `Selected: ${formData.fileUpload.name}` 
                  : 'Drag & drop files here or click to browse'
                }
              </p>
              <button type="button" className="file-upload-button" onClick={handleFileButtonClick}>
                Choose Files
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes / Comments</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Additional notes or comments about your project..."
          />
        </div>
        
        <button type="submit" className="btn-submit">
          SUBMIT PROJECT
        </button>
      </form>
    </div>
  )
}

export default ContactForm
