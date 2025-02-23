"use client";
import { useState, useMemo } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { SelectSimpleFormProps } from "@/interfaces/components/form/selects/selectSimple.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageFormProps from "@/components/form/messages/message.component";

const propsDefault: Partial<SelectSimpleFormProps> = {
  appendTo: null,
  autoFocus: false,
  autoOptionFocus: false,
  checkmark: false,
  className: "w-full",
  disabled: false,
  editable: false,
  emptyFilterMessage: "No results found",
  emptyMessage: "No available options",
  filter: true,
  filterBy: "label",
  filterInputAutoFocus: false,
  filterMatchMode: "contains",
  filterPlaceholder: "",
  focusOnHover: true,
  highlightOnSelect: true,
  id: "select-simple-id",
  inputId: "",
  inputRef: null,
  invalid: false,
  loading: false,
  name: "select-simple-name",
  options: [],
  panelClassName: "",
  panelStyle: {},
  placeholder: "",
  pt: {},
  ptOptions: {},
  required: false,
  resetFilterOnHide: false,
  scrollHeight: "200px",
  showClear: false,
  showOnFocus: false,
  style: {},
  tabIndex: 0,
  tooltip: "",
  tooltipOptions: {},
  unstyled: false,
  variant: "outlined",
};

const SelectSimpleFormComponent = <T,>(
  propsCurrent: SelectSimpleFormProps<T>
): React.ReactElement => {
  const props = useMemo(
    () => ({ ...propsDefault, ...propsCurrent }),
    [propsCurrent]
  );
  const [selectedValue, setSelectedValue] = useState(
    propsCurrent.value || null
  );
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (event: DropdownChangeEvent) => {
    if (props.onChange) {
      props.onChange(event);
    } else {
      setSelectedValue(event.value);
    }
    setErrors([]);
  };

  return (
    <div>
      {props.label && (
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <Dropdown
        appendTo={props.appendTo}
        ariaLabel={props.ariaLabel}
        ariaLabelledBy={props.ariaLabelledBy}
        autoFocus={props.autoFocus}
        autoOptionFocus={props.autoOptionFocus}
        checkmark={props.checkmark}
        className={props.className}
        disabled={props.disabled}
        editable={props.editable}
        emptyFilterMessage={props.emptyFilterMessage}
        emptyMessage={props.emptyMessage}
        filter={props.filter}
        filterBy={props.filterBy}
        filterInputAutoFocus={props.filterInputAutoFocus}
        filterLocale={props.filterLocale}
        filterMatchMode={props.filterMatchMode}
        filterPlaceholder={props.filterPlaceholder}
        focusOnHover={props.focusOnHover}
        highlightOnSelect={props.highlightOnSelect}
        id={props.id}
        inputId={props.inputId ?? props.id}
        inputRef={props.inputRef}
        invalid={props.invalid}
        loading={props.loading}
        maxLength={props.maxLength}
        name={props.name}
        options={props.options}
        panelClassName={props.panelClassName}
        panelStyle={props.panelStyle}
        placeholder={props.placeholder}
        pt={props.pt}
        ptOptions={props.ptOptions}
        required={props.required}
        resetFilterOnHide={props.resetFilterOnHide}
        scrollHeight={props.scrollHeight}
        showClear={props.showClear}
        showOnFocus={props.showOnFocus}
        style={props.style}
        tabIndex={props.tabIndex}
        tooltip={props.tooltip}
        tooltipOptions={props.tooltipOptions}
        transitionOptions={props.transitionOptions}
        unstyled={props.unstyled}
        useOptionAsValue={props.useOptionAsValue}
        value={props.value ?? selectedValue}
        variant={props.variant}
        optionValue={props.optionValue}
        optionLabel={props.optionLabel}
        itemTemplate={props.itemTemplate}
        optionGroupTemplate={props.optionGroupTemplate}
        panelFooterTemplate={props.panelFooterTemplate}
        valueTemplate={props.valueTemplate}
        filterTemplate={props.filterTemplate}
        optionDisabled={props.optionDisabled}
        onChange={handleChange}
      />
      {errors.length > 0 && (
        <div className="pt-1 space-y-1">
          {errors.map((error, index) => (
            <div key={index}>
              <MessageFormProps text={error} severity="error" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectSimpleFormComponent;
