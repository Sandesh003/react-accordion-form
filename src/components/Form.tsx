import React, { useState } from "react";
import Question from "./Question";
import { Questions } from "../core/questionAPIResponse.interface";
import { updateForm, saveForm } from "../store/slices/questionForm";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface FormProps {
  form_id: string;
  onCancel: () => void;
  afterSave: () => void;
  // closeAccordion: (close: boolean) => void;
}

const Form = (props: FormProps) => {
  const { form_id, onCancel, afterSave } = props;
  const [isModified, setIsModified] = useState(false);

  const questions = useAppSelector((state) => state.questionForm).find(
    (item) => item.id == form_id
  )!.questions;

  const dispatch = useAppDispatch();

  const handleSumbitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveForm({ form_id }));
    console.log("form submitted");
    afterSave();
  };

  const checkedModified = (option: string, q_id: string, form_id: string) => {
    dispatch(updateForm({ option, q_id, form_id }));
    if (option !== "No") setIsModified(true);
  };
  return (
    <>
      <form onSubmit={handleSumbitForm}>
        {questions
          ? questions.map((question: Questions) => {
            return (
              <Question
                key={question.q_id}
                form_id={form_id}
                question_id={question.q_id}
                checkedModified={checkedModified}
              />
            );
          })
          : ""}
        {isModified ||
          questions.every((question: Questions) => question.answer !== "No") ? (
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn-slate"
              onClick={() => onCancel()}
            >
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Form;
