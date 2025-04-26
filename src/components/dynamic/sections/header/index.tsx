import { Header } from "@interfaces/components/dynamic/sections/list.interface";
import Link from "next/link";
import ButtonFormComponent from "@components/form/buttons/button.component";

export const HeaderFormComponent = (config?: Header): React.ReactElement => {
  const { title, btnCreate } = config || {};
  return (
    <div className="flex justify-between items-center">
      {title && (
        <div className="font-extrabold uppercase text-2xl text-center lg:text-start">
          {title}
        </div>
      )}
      {btnCreate && (
        <>
          <Link href={btnCreate.redirect}>
            <ButtonFormComponent
              icon="pi pi-plus"
              size={undefined}
              label={btnCreate.name ?? "Crear"}
            />
          </Link>
        </>
      )}
    </div>
  );
};
