import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InputField from './Input';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await addDoc(collection(db, "questionnaireResponses"), {
            ...formValues, 
            questionnaireId: id,
            createdAt: Timestamp.now()
        }); 
        console.log("Form data saved to Firebase")
        alert("Submission successful!");
    } catch (error) {
        console.error("Error saving to Firebase:", error);
        alert("Error saving submission. Please try again later.");
    }
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
                {question.settings.responses.map((resp) => (
                    <InputField key={resp.input_key} type={resp.type} name={resp.input_key} value={formValues[resp.input_key]} onChange={handleChange} required={resp.required} label={resp.label}/>
                ))}


                    
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
