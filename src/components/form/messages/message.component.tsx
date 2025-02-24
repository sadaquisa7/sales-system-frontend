import { Message } from "primereact/message";
import { MessageFormProps } from "@/interfaces/components/form/messages/message.interface";

const propsDefault: Partial<MessageFormProps> = {
  severity: "info",
  text: "",
  icon: undefined,
  unstyled: false,
  pt: {},
  ptOptions: {},
};

const MessageFormComponent: React.FC<MessageFormProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };

  if (!props.text) return null;

  return (
    <Message
      className="px-1.5 py-0.5"
      severity={props.severity}
      text={props.text}
      icon={props.icon}
      unstyled={props.unstyled}
      pt={props.pt!}
      ptOptions={props.ptOptions!}
    />
  );
};

export default MessageFormComponent;
