"use client";
import { useState } from "react";

import ButtonFormComponent from "@/components/form/buttons/button.component";
import InputTextFormComponent from "@/components/form/inputs/inputText.component";
import InputMaskFormComponent from "@/components/form/inputs/inputMask.component";
import InputNumberFormComponent from "@/components/form/inputs/inputNumber.component";
import InputSwitchFormComponent from "@/components/form/inputs/inputSwitch.component";
import InputPasswordFormComponent from "@/components/form/inputs/inputPassword.component";
import SelectSimpleFormComponent from "@/components/form/selects/selectSimple.component";
import SelectMultipleFormComponent from "@/components/form/selects/selectMultiple.component";
import DateCalendarFormComponent from "@/components/form/dates/calendar.component";

interface FormProps {
  mensaje: string;
}

interface newFormInteface {
  input: string;
  inputMask: string;
  inputNumber: number;
  inputSwitch: boolean;
  inputPassword: string;
  selectSimple: string;
  selectMultiple: never[];
  dates: string | number | Date | (string | number | Date | null)[] | null;
}

const FormComponent: React.FC<FormProps> = ({ mensaje }) => {
  const [newForm, setNewForm] = useState<newFormInteface>({
    input: "",
    inputMask: "",
    inputNumber: 0,
    inputSwitch: false,
    inputPassword: "",
    selectSimple: "",
    selectMultiple: [],
    dates: null,
  });

  interface ObjectTest {
    id: number;
    name: string;
  }

  const optionsString = ["item 1", "item 2", "item 3", "item 4"];

  const optionsObjects: ObjectTest[] = [
    {
      id: 1,
      name: "item 1",
    },
    {
      id: 2,
      name: "item 2",
    },
    {
      id: 3,
      name: "item 4",
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("New form", newForm);
  };
  return (
    <div>
      <form>
        <div className="p-5 gap-2 grid grid-cols-5">
          <ButtonFormComponent label={mensaje} onClick={handleClick} />
          <DateCalendarFormComponent
            label="calendario"
            name="calemdario"
            value={newForm.dates}
            // numberOfMonths={2}
            showTime
            selectionMode="range"
            onChange={(e) => setNewForm((prev) => ({ ...prev, dates: e }))}
          />
          <SelectSimpleFormComponent
            id="select-simple-id"
            name="select-simple-name"
            label="Simple select"
            value={newForm.selectSimple}
            options={optionsString}
            // optionLabel="name"
            // optionValue="id"
            // filterBy="name"
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, selectSimple: e.value }))
            }
          />
          <SelectMultipleFormComponent<ObjectTest>
            id="select-multiple-id"
            name="select-multiple-name"
            label="Simple multiple"
            inputId="selecct-multiple-inputId"
            value={newForm.selectMultiple}
            options={optionsObjects}
            optionLabel="name"
            optionValue="id"
            filterBy="name"
            itemTemplate={(option) => (
              <span>
                {option.id} - {option.name}
              </span>
            )}
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, selectMultiple: e.value }))
            }
          />
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
            id="example-id-group"
            name="name-example-group"
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
          <InputSwitchFormComponent
            value={newForm.inputSwitch}
            id="example-id-Switch"
            name="name-example-Switch"
            label="Switch"
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, inputSwitch: e.value }))
            }
          />
          <InputPasswordFormComponent
            id="example-id-Password"
            name="name-example-Password"
            label="Password"
            toggleMask
            value={newForm.inputPassword}
            onChange={(e) =>
              setNewForm((prev) => ({ ...prev, inputPassword: e.target.value }))
            }
          />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
