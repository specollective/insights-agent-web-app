import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum'
import './SurveyPage.css'

function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

function SurveyPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    zipCode: '',
    educationLevel: '',
    maritalStatus: '',
    isHispanicOrLatino: false,
  })

  const handleSubmit = () => {
    navigate('/success')
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="survey">
        <div className="question">
          <h4>Insights Agent General Info Survey</h4>
          <LoremIpsum p={1} />
        </div>

        <div className="question">
          <h4>What is your age?</h4>
          <input name="name" type="text" onChange={handleInputChange} />
        </div>

        <div className="question">
          <h4>What is your gender?</h4>
          <input name="name" type="text" onChange={handleInputChange} />
        </div>

        <div className="question">
          <h4>Are you of Hispanic, Latino, or Spanish origin?</h4>
          <div className="radio-button-group">
            <input
              type="radio"
              id="latino-yes"
              name="isHispanicOrLatino"
              value="true"
              onChange={handleInputChange}
            />
           <label htmlFor="latino-yes">Si</label><br/>

            <input
              type="radio"
              id="latino-no"
              name="isHispanicOrLatino"
              value="false"
              onChange={handleInputChange}
            />
           <label htmlFor="latino-no">No</label>
          </div>
        </div>

        <div className="question">
          <h4>What is your level of education?</h4>
          <input name="educationLevel" type="text" onChange={handleInputChange} />
        </div>

        <div className="question">
          <h4>What is your your marital status?</h4>
          <input name="maritalStatus" type="text" onChange={handleInputChange} />
        </div>

        <div className="actions">
          <button className="left">Clear Form</button>
          <button className="right" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default SurveyPage;
