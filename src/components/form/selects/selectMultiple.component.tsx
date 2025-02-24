"use client";
import { useMemo, useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { SelectMultipleFormProps } from "@/interfaces/components/form/selects/selectMultiple.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";

const propsDefault: Partial<SelectMultipleFormProps> = {
  appendTo: null,
  autoOptionFocus: false,
  className: "w-full",
  disabled: false,
  display: "comma",
  filter: true,
  filterBy: "label",
  focusOnHover: true,
  id: "select-multiple-id",
  inputId: "",
  invalid: false,
  loading: false,
  name: "select-multiple-name",
  options: [],
  panelClassName: "",
  placeholder: "",
  scrollHeight: "200px",
  showClear: false,
  showSelectAll: true,
  style: {},
  tabIndex: 0,
  tooltip: "",
  unstyled: false,
  variant: "outlined",
  label: "",
  filterMatchMode: "contains",
};

const SelectMultipleFormComponent = <T,>(
  propsCurrent: SelectMultipleFormProps<T>
): React.ReactElement => {
  const props = useMemo(
    () => ({
      ...propsDefault,
      ...propsCurrent,
      invalid: propsCurrent.errors && propsCurrent.errors.length > 0,
    }),
    [propsCurrent]
  );
  const [internalValue, setInternalValue] = useState(props.value || []);

  const handleChange = (e: MultiSelectChangeEvent) => {
    const newValue = e.value;
    if (props.onChange) {
      props.onChange(e);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div>
      {props.label && (
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <div>
        <MultiSelect
          appendTo={props.appendTo}
          ariaLabelledBy={props.ariaLabelledBy}
          autoOptionFocus={props.autoOptionFocus}
          checkboxIcon={props.checkboxIcon}
          className={props.className}
          clearIcon={props.clearIcon}
          closeIcon={props.closeIcon}
          dataKey={props.dataKey}
          disabled={props.disabled}
          display={props.display}
          dropdownIcon={props.dropdownIcon}
          emptyFilterMessage={props.emptyFilterMessage}
          emptyMessage={props.emptyMessage}
          filter={props.filter}
          filterBy={props.filterBy}
          filterInputAutoFocus={props.filterInputAutoFocus}
          filterLocale={props.filterLocale}
          filterMatchMode={props.filterMatchMode}
          filterPlaceholder={props.filterPlaceholder}
          filterTemplate={props.filterTemplate}
          fixedPlaceholder={props.fixedPlaceholder}
          flex={props.flex}
          focusOnHover={props.focusOnHover}
          id={props.id}
          inline={props.inline}
          inputId={props.inputId ?? props.id}
          inputRef={props.inputRef}
          invalid={props.invalid}
          itemCheckboxIcon={props.itemCheckboxIcon}
          itemClassName={props.itemClassName}
          itemTemplate={props.itemTemplate}
          loading={props.loading}
          loadingIcon={props.loadingIcon}
          maxSelectedLabels={props.maxSelectedLabels}
          name={props.name}
          optionDisabled={props.optionDisabled}
          optionGroupChildren={props.optionGroupChildren}
          optionGroupLabel={props.optionGroupLabel}
          optionGroupTemplate={props.optionGroupTemplate}
          optionLabel={props.optionLabel}
          options={props.options}
          optionValue={props.optionValue}
          overlayVisible={props.overlayVisible}
          panelClassName={props.panelClassName}
          panelFooterTemplate={props.panelFooterTemplate}
          panelHeaderTemplate={props.panelHeaderTemplate}
          panelStyle={props.panelStyle}
          placeholder={props.placeholder}
          pt={props.pt}
          ptOptions={props.ptOptions}
          removeIcon={props.removeIcon}
          resetFilterOnHide={props.resetFilterOnHide}
          scrollHeight={props.scrollHeight}
          selectAll={props.selectAll}
          selectAllLabel={props.selectAllLabel}
          selectedItemsLabel={props.selectedItemsLabel}
          selectedItemTemplate={props.selectedItemTemplate}
          selectionLimit={props.selectionLimit}
          selectOnFocus={props.selectOnFocus}
          showClear={props.showClear}
          showSelectAll={props.showSelectAll}
          style={props.style}
          tabIndex={props.tabIndex}
          tooltip={props.tooltip}
          tooltipOptions={props.tooltipOptions}
          transitionOptions={props.transitionOptions}
          unstyled={props.unstyled}
          useOptionAsValue={props.useOptionAsValue}
          value={props.value ?? internalValue}
          variant={props.variant}
          virtualScrollerOptions={props.virtualScrollerOptions}
          onChange={handleChange}
        />
      </div>
      {props.errors && props.errors.length > 0 && (
        <div className="pt-1 space-y-1">
          {props.errors.map((error, index) => (
            <div key={index}>
              <MessageSimpleFormComponent text={error} severity="error" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMultipleFormComponent;
