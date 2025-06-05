import React, {useState, useEffect} from "react";

function Questionnaire(){
  const [questionnaire, setQuestionnaire] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://test.almamaters.club:9090/questionnaire/15`);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setQuestionnaire(data.data);
      } else{
        console.log("Error fetching Data:", response.status);
      }
    };
    fetchData();
  }, []);

  if (!questionnaire) {
    return <div>Loading questionnaire...</div>;
  }
  return (
    <div>
      <h1>{questionnaire.name}</h1>
      <p>{questionnaire.description}</p>

      {/* {questionnaire.questions.map((question) => (
        <div key={question.id}>

          </div>
      ))} */}
      
      
    </div>
  )
}

export default Questionnaire;

