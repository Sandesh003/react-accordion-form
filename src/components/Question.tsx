import React, { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import InputText from "./InputText";
import InputRadio from "./InputRadio";

interface QuestionProps {
  form_id: string;
  question_id: string;
  checkedModified: (option: string, q_id: string, form_id: string) => void;
}

const Question = (props: QuestionProps) => {
  const { form_id, question_id, checkedModified } = props;
  const [selectedOption, setSelectedOption] = React.useState("No");
  const [textValue, setTextValue] = React.useState("");

  useEffect(() => {
    setSelectedOption(selectedOption);
  }, [selectedOption]);

  const question = useAppSelector((state) => state.questionForm)
    .find((item) => item.id == form_id)!
    .questions.find((val) => val.q_id == question_id)!;

  const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextValue(e.currentTarget.value);
    checkedModified(e.currentTarget.value, e.currentTarget.name, form_id);
    setSelectedOption(e.currentTarget.value);
  };

  const isOptionSelected = (option: string): boolean => {
    return selectedOption === option;
  };

  const radioOptions: string[] = ['Yes', 'No', 'NA']
  return (
    <>
      <div className="question-options">
        <div className="question">{question?.question}</div>
        <div className="options">
          {question.type == 'radio' ?
            radioOptions.map((item, index) => {
              return <InputRadio key={index} handleOptionClick={handleOptionClick} isOptionSelected={isOptionSelected} value={item} name={question.q_id} />
            }) :
            <InputText handleOptionClick={handleOptionClick} value={textValue} name={question.q_id} placeHolder={question.question} />}
        </div>
      </div>
    </>
  );
};

export default Question;
