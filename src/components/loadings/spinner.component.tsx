import { ProgressSpinner } from "primereact/progressspinner";
const SpinnerComponent: React.FC = () => {
  return (
    <div className="h-screen w-screen z-[9999] flex justify-center items-center absolute top-0 bg-white bg-opacity-50">
      <ProgressSpinner aria-label="loading" />
    </div>
  );
};

export default SpinnerComponent;
