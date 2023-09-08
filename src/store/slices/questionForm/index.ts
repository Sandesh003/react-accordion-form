import { createSlice } from "@reduxjs/toolkit";
import { fakeAPIResponse } from "../../../core/fakeApiResponse";
import { QuestionAPIResponse } from "../../../core/questionAPIResponse.interface";

const initialState: QuestionAPIResponse[] = fakeAPIResponse;

interface updateFormPayload {
  payload: {
    form_id: string;
    option: string;
    q_id: string;
  };
}

interface saveFormPayload {
  payload: {
    form_id: string;
  };
}

export const questionFormSlice = createSlice({
  name: "questionForm",
  initialState,
  reducers: {
    updateForm: (state: QuestionAPIResponse[], payload: updateFormPayload) => {
      return state.map((item) => {
        let questions = item.questions;
        if (item.id == payload.payload.form_id) {
          questions = item.questions.map((que) => {
            return {
              ...que,
              answer:
                que.q_id == payload.payload.q_id
                  ? payload.payload.option
                  : que.answer,
            };
          });
        }
        return { ...item, questions };
      });
    },
    saveForm: (state: QuestionAPIResponse[], payload: saveFormPayload) => {
      return state.map((item) => {
        return {
          ...item,
          isSaved: item.id == payload.payload.form_id ?? item.is_saved,
        };
      });
    },
  },
});

export const { updateForm, saveForm } = questionFormSlice.actions;
export default questionFormSlice.reducer;
