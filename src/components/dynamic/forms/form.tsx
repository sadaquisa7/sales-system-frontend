"use client";
import { useState } from "react";

import ButtonFormComponent from "@/components/form/buttons/button.component";
import InputTextFormComponent from "@/components/form/inputs/inputText.component";
interface FormProps {
  mensaje: string;
}

const FormComponent: React.FC<FormProps> = ({ mensaje }) => {
  const [newForm, setNewForm] = useState({ input: "" });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("New form", newForm);
  };
  return (
    <div>
      <form>
        <div className="p-5 space-y-5">
          <ButtonFormComponent label={mensaje} onClick={handleClick} />
          <InputTextFormComponent
            value={newForm.input}
            id="example-id"
            name="name-example"
            label="holaa"
            onChange={(e) => setNewForm({ input: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
