import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/authentication'
import { createSurvey } from 'services/survey'
import 'components/pages/SurveyPage.css'

const DEFAULT_FORM_VALUES = {
  age: '',
  gender: '',
  zipCode: '',
  educationLevel: '',
  maritalStatus: '',
  isHispanicOrLatino: null,
}

function SurveyPage() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES)

  if (!auth.user) return <div>Loading</div>
  if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>

  const handleSubmit = async () => {
    try {
      await createSurvey(auth.user, formData)
      navigate('/success', { replace: true })
    } catch (e) {
      console.log(e)
    }
  }

  const handleClearForm = () => {
    setFormData(DEFAULT_FORM_VALUES);
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="survey">
        <div className="question">
          <h4>Insights Agent General Info Survey</h4>
          <p>Instructions</p>
        </div>

        <div className="question">
          <h4>What is your age?</h4>
          <input
            name="age"
            type="text"
            onChange={handleInputChange}
            data-testid="age-input"
            value={formData.age}
          />
        </div>

        <div className="question">
          <h4>What gender do you identify with?</h4>
          <div className="radio-button-group">
            <input
              checked={formData.gender === 'man'}
              id="man"
              name="gender"
              onChange={handleInputChange}
              type="radio"
              value="man"
            />
            <label htmlFor="man">Man</label><br/>

            <input
              checked={formData.gender === 'non-binary'}
              id="non-binary"
              name="gender"
              onChange={handleInputChange}
              type="radio"
              value="non-binary"
            />
            <label htmlFor="non-binary">Non-binary/non-conforming</label><br/>

            <input
              checked={formData.gender === 'transgender'}
              id="transgender"
              name="gender"
              onChange={handleInputChange}
              type="radio"
              value="transgender"
            />
            <label htmlFor="transgender">Transgender</label><br/>

            <input
              checked={formData.gender === 'woman'}
              id="woman"
              name="gender"
              onChange={handleInputChange}
              type="radio"
            />
            <label htmlFor="woman">Woman</label><br/>
          </div>

          <div>
            <label className="preference-input-label">Prefer to self describe</label>
            <input
              name="gender"
              type="text"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="question">
          <h4>Are you of Hispanic, Latino, or Spanish origin?</h4>
          <div className="radio-button-group">
            <input
              checked={formData.isHispanicOrLatino === 'true'}
              id="latino-yes"
              name="isHispanicOrLatino"
              onChange={handleInputChange}
              type="radio"
              value="true"
            />
            <label htmlFor="latino-yes">Yes</label><br/>

            <input
              checked={formData.isHispanicOrLatino === 'false'}
              id="latino-no"
              name="isHispanicOrLatino"
              onChange={handleInputChange}
              type="radio"
              value="false"
            />
           <label htmlFor="latino-no">No</label>
          </div>
        </div>

        <div className="question">
          <h4>What is your level of education?</h4>
          <div className="radio-button-group">
            <input
              checked={formData.educationLevel === 'highschool'}
              id="highschool"
              name="educationLevel"
              onChange={handleInputChange}
              type="radio"
              value="highschool"
            />
            <label htmlFor="highschool">Highschool</label><br/>
            <input
              checked={formData.educationLevel === 'college'}
              type="radio"
              onChange={handleInputChange}
              name="educationLevel"
              id="college"
              value="college"
            />
            <label htmlFor="college">College</label><br/>
            <input
              checked={formData.educationLevel === 'graduate-school'}
              id="graduate-school"
              name="educationLevel"
              onChange={handleInputChange}
              type="radio"
              valiue="graduate-school"
            />
            <label htmlFor="graduate-school">Graduate School</label><br/>
          </div>

          <div>
            <label className="preference-input-label">Prefer to self describe</label>
            <input name="educationLevel" type="text" onChange={handleInputChange} />
          </div>
        </div>

        <div className="question">
          <h4>What is your your marital status?</h4>
          <div className="radio-button-group">
            <input
              type="radio"
              id="single-never-married"
              name="maritalStatus"
              onChange={handleInputChange}
            />
            <label htmlFor="single-never-married">Single Never Married</label><br/>
            <input
              type="radio"
              id="married-or-domestic-partnership"
              name="maritalStatus"
              onChange={handleInputChange}
            />
            <label htmlFor="married-or-domestic-partnership">Married or domestic partnership</label><br/>
            <input
              type="radio"
              id="widowed"
              name="maritalStatus"
              onChange={handleInputChange}
            />
            <label htmlFor="widowed">Widowed</label><br/>
            <input
              type="radio"
              id="divorced"
              name="maritalStatus"
              onChange={handleInputChange}
            />
            <label htmlFor="divorced">Divorced</label><br/>
            <input
              type="radio"
              id="separated"
              name="maritalStatus"
              onChange={handleInputChange}
            />
            <label htmlFor="separated">Separated</label><br/>
          </div>
        </div>

        <div className="actions">
          <button className="left" onClick={handleClearForm}>Clear Form</button>
          <button className="right" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default SurveyPage
