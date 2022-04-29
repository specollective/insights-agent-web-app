import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';
import { createSurvey } from 'services/survey';
import 'components/pages/SurveyPage.css';

function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

function SurveyPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    zipCode: '',
    educationLevel: '',
    maritalStatus: '',
    isHispanicOrLatino: false,
  })

  useEffect(() => {
    auth.fetchCurrentUser()
  }, [])


  if (!auth.user) return <div>Loading</div>
  if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>


  const handleSubmit = async () => {
    try {
      await createSurvey(auth.user, formData);
      navigate('/success', { replace: true });
    } catch (e) {
      console.log(e)
    }
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
          <input name="age" type="text" onChange={handleInputChange} />
        </div>

        <div className="question">
          <h4>What gender do you identify with?</h4>
            <div className="radio-button-group">
              <input
                type="radio"
                id="man"
                name="gender"
                onChange={handleInputChange}
              />
              <label htmlFor="man">Man</label><br/>
              <input
                type="radio"
                id="non-binary"
                name="gender"
                onChange={handleInputChange}
              />
            <label htmlFor="man">Non-binary</label><br/>
          </div>
          <div>
            <label className="preference-input-label">Prefer to self describe</label>
            <input name="gender" type="text" onChange={handleInputChange} />
          </div>
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
            <label htmlFor="latino-yes">Yes</label><br/>

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
            <div className="radio-button-group">
              <input
                type="radio"
                id="highschool"
                name="educationLevel"
                onChange={handleInputChange}
              />
              <label htmlFor="man">Highschool</label><br/>
              <input
                type="radio"
                id="college"
                name="educationLevel"
                onChange={handleInputChange}
              />
              <label htmlFor="college">College</label><br/>
              <input
                type="radio"
                id="graduate-school"
                name="educationLevel"
                onChange={handleInputChange}
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
