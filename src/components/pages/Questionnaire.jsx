import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Questionnaire() {
    const {id} = useParams()
  const [questionnaire, setQuestionnaire] = useState(null);
  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://test.almamaters.club:9090/questionnaire/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setQuestionnaire(data.data);
          
          const initialValues = {};
          data.data.questions.forEach((question) => {
            question.settings.responses.forEach((resp) => {
                initialValues[resp.input_key] = '';
            });
          });
          setFormValues(initialValues);
        } else {
          console.log("Error fetching data:", response.status);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values:", formValues)
  }

  if (!questionnaire) {
    return <div>Loading questionnaire...</div>;
  }

  return (
    <div className='container'>
      <h2>{questionnaire.name}</h2>
      <p>{questionnaire.description}</p>
      <form onSubmit={handleSubmit}>
        {questionnaire.questions.map((question) => (
            <div key={question.id} className='question'>
                {question.settings.responses.map((resp) => {
                    let input;
                    switch (resp.type) {
                        case "FREE_TEXT":
                          input = (
                            <textarea
                              name={resp.input_key}
                              value={formValues[resp.input_key]}
                              onChange={handleChange}
                              required={resp.required}
                              rows={3}
                              className='input'
                            />
                          );
                          break;
                      
                        case "DATE_TIME":
                          input = (
                            <input
                              type="datetime-local"
                              name={resp.input_key}
                              value={formValues[resp.input_key]}
                              onChange={handleChange}
                              required={resp.required}
                              className='input'
                            />
                          );
                          break;
                      
                        case "SIMPLE_TEXT":
                          input = (
                            <input
                              type="text"
                              name={resp.input_key}
                              value={formValues[resp.input_key]}
                              onChange={handleChange}
                              required={resp.required}
                              className='input'
                            />
                          );
                          break;
                      
                        default:
                          input = (
                            <input
                              type="text"
                              name={resp.input_key}
                              value={formValues[resp.input_key]}
                              onChange={handleChange}
                              required={resp.required}
                              className='input'
                            />
                          );
                      }
                    
                    return (
                        <div key={resp.input_key} style={{marginTop: '12px'}}>
                            <label className='label'>{resp.label}</label>
                            {input}
                        </div>
                    )
                })}

            </div>
        ))}
        <button type="submit" className='submit-btn'>Submit</button>

      </form>
      <footer className='footer'>
        <p>&copy; 2023 Poppops & Co. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Questionnaire;
