import React from "react";
import FormQuestions from "./FormQuestions";
import { form1, form1Validation } from "./helperObjects";

const MainForm2 = () => {
  console.log(form1Validation, "form1Validation");
  return (
    <div>
      <FormQuestions inputs={form1} formValidation={form1Validation} />
    </div>
  );
};

export default MainForm2;
