import "./App.css";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Card from "./components/Card";
import { useAppSelector } from "./store/hooks";
import Form from "./components/Form";
import { QuestionAPIResponse } from "./core/questionAPIResponse.interface";

function App() {
  const fakeQuestionApi: QuestionAPIResponse[] = useAppSelector(
    (state) => state.questionForm
  );
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      <div className="background">
        <Card>
          {fakeQuestionApi.map((item, index) => {
            const enable = fakeQuestionApi.every((q, qi) => {
              if (qi >= index) {
                // after current
                return true;
              } else {
                // before current
                return q.is_saved;
              }
            });
            return (
              <Accordion
                key={item.id}
                isOpen={isOpen == index}
                title={item.title}
                disabled={!enable}
                handleClick={(open: boolean) => {
                  if (!open) {
                    setIsOpen(-1);
                  } else {
                    setIsOpen(index);
                  }
                }}
              >
                <Form
                  form_id={item.id}
                  afterSave={() => {
                    if (index == fakeQuestionApi.length - 1) {
                      console.log("[Final Array with updated value]", fakeQuestionApi);
                    }
                    setIsOpen(Math.min(index + 1, fakeQuestionApi.length - 1));
                  }}
                  onCancel={() => {
                    setIsOpen(-1);
                  }}
                />
              </Accordion>
            );
          })}
        </Card>
      </div>
    </>
  );
}

export default App;
