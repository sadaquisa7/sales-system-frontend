"use client";
import { useState } from "react";

import ButtonFormComponent from "@/components/form/buttons/button.component";
import InputTextFormComponent from "@/components/form/inputs/inputText.component";
import InputMaskFormComponent from "@/components/form/inputs/inputMask.component";
import InputNumberFormComponent from "@/components/form/inputs/inputNumber.component";

interface FormProps {
  mensaje: string;
}

const FormComponent: React.FC<FormProps> = ({ mensaje }) => {
  const [newForm, setNewForm] = useState({
    input: "",
    inputMask: "",
    inputNumber: 0,
  });

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
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, input: e.target.value }))
            }
          />
          <InputTextFormComponent
            value={newForm.input}
            id="example-id"
            name="name-example"
            label="group"
            group
            leftAddon="$"
            rightAddon="pi-star-fill"
            leftAddonType="text"
            rightAddonType="icon"
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, input: e.target.value }))
            }
          />
          <InputMaskFormComponent
            value={newForm.inputMask}
            id="example-id-mask"
            name="name-example-mask"
            mask="99-999999"
            label="mask"
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, inputMask: e.value ?? "" }))
            }
          />
          <InputMaskFormComponent
            value={newForm.inputMask}
            id="example-id-mask-group"
            name="name-example-mask-group"
            label="group"
            group
            mask="99-89855"
            leftAddon="$"
            rightAddon="pi-star-fill"
            leftAddonType="text"
            rightAddonType="icon"
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, inputMask: e.value ?? "" }))
            }
          />
          <InputNumberFormComponent
            value={newForm.inputNumber}
            id="example-id-number"
            name="name-example-number"
            label="number"
            minFractionDigits={2}
            maxFractionDigits={5}
            mode="currency"
            currency="PEN"
            locale="es-PE"
            showButtons
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, inputNumber: e.value ?? 0 }))
            }
          />
          <InputNumberFormComponent
            value={newForm.inputNumber}
            id="example-id-number-group"
            name="name-example-number-group"
            label="number group"
            group
            leftAddon="$"
            rightAddon="pi-star-fill"
            leftAddonType="text"
            rightAddonType="icon"
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, inputNumber: e.value ?? 0 }))
            }
          />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
