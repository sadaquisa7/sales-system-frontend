import { MessageSimpleFormProps } from "@/interfaces/components/form/messages/messageSimple.interface";

const propsDefault: Partial<MessageSimpleFormProps> = {
  severity: "info",
  text: "",
  variant: "text",
  size: "small",
};

const severityConfig = {
  error: {
    styles: "bg-red-100 text-red-700 border-red-200",
    outlined: "border-red-700 text-red-700",
    text: "text-red-700",
    icon: "pi-times-circle",
  },
  success: {
    styles: "bg-green-100 text-green-700 border-green-200",
    outlined: "border-green-700 text-green-700",
    text: "text-green-700",
    icon: "pi-check-circle",
  },
  secondary: {
    styles: "bg-gray-100 text-gray-700 border-gray-200",
    outlined: "border-gray-700 text-gray-700",
    text: "text-gray-700",
    icon: "pi-info-circle",
  },
  info: {
    styles: "bg-blue-100 text-blue-700 border-blue-200",
    outlined: "border-blue-700 text-blue-700",
    text: "text-blue-700",
    icon: "pi-info-circle",
  },
  contrast: {
    styles: "bg-purple-100 text-purple-700 border-purple-200",
    outlined: "border-purple-700 text-purple-700",
    text: "text-purple-700",
    icon: "pi-exclamation-circle",
  },
  warn: {
    styles: "bg-yellow-100 text-yellow-700 border-yellow-200",
    outlined: "border-yellow-700 text-yellow-700",
    text: "text-yellow-700",
    icon: "pi-exclamation-triangle",
  },
};

// Separate size styles (only text size) and padding
const textSizeStyles = {
  small: "text-sm",
  large: "text-lg",
};

const paddingStyles = {
  small: "p-2",
  large: "p-6",
  default: "p-4",
};

const MessageSimpleFormComponent: React.FC<MessageSimpleFormProps> = (
  propsCurrent
) => {
  const props = { ...propsDefault, ...propsCurrent };

  if (!props.text) return null;

  const currentSeverity = props.severity || "info";
  const config = severityConfig[currentSeverity] || severityConfig.info;

  const variantStyle =
    props.variant === "text"
      ? config.text
      : props.variant === "outlined"
      ? config.outlined
      : config.styles;

  // Apply text size for all variants
  const textSizeClass = props.size ? textSizeStyles[props.size] : "text-base";

  // Only apply padding for non-text variants
  const paddingClass =
    props.variant !== "text"
      ? props.size === "small"
        ? paddingStyles.small
        : props.size === "large"
        ? paddingStyles.large
        : paddingStyles.default
      : "";

  const iconClass = props.icon || config.icon;

  return (
    <div
      className={`flex items-center rounded-lg ${paddingClass} ${variantStyle} ${textSizeClass} ${
        props.variant !== "text" ? "border" : ""
      }`}
    >
      <i className={`pi ${iconClass} mr-2`}></i>
      <span className="font-medium flex-1">{props.text}</span>
    </div>
  );
};

export default MessageSimpleFormComponent;
