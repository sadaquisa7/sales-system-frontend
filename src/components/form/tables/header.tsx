export const HeaderFormComponent = (title?: string): React.ReactElement => {
  return (
    <div className="font-extrabold uppercase text-2xl text-center lg:text-start">
      {title}
    </div>
  );
};
