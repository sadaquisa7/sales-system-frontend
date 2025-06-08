"use client";
import { useMemo, useState, useEffect } from "react";
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
  textLoading: "Cargando...",
  autoLoadService: true,
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
  const [options, setOptions] = useState(props.options || []);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: MultiSelectChangeEvent) => {
    const newValue = e.value;
    if (props.onChange) {
      props.onChange(e);
    }
    setInternalValue(newValue);
  };

  const fetchOptions = async () => {
    if (!props.serviceGetOptions) return;
    setLoading(true);
    try {
      const { status, data } = await props.serviceGetOptions();
      const options = data ?? [];
      if (status && !("items" in options)) {
        setOptions(options);
      }
    } catch (error) {
      console.error("Error fetching options:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (props.serviceGetOptions && props.autoLoadService) {
      fetchOptions();
    }
  }, [props.serviceGetOptions, props.autoLoadService]);

  useEffect(() => {
    if (props.exposeServiceRef) {
      props.exposeServiceRef.current = fetchOptions;
    }
  }, [props.exposeServiceRef]);

  const loadingDynamic = useMemo(
    () => props.loading || loading,
    [props.loading, loading]
  );

  const newProps = useMemo(
    () => ({
      ...props,
      loading: loadingDynamic,
      options: options ?? props.options,
      placeholder: loadingDynamic ? props.textLoading : props.placeholder,
    }),
    [props, loadingDynamic, options]
  );

  const onHide = () => {
    if (props.onHide) {
      props.onHide(internalValue);
    }
  };

  return (
    <div>
      {newProps.label && (
        <LabelFormComponent for={newProps.name} value={newProps.label} />
      )}
      <div>
        <MultiSelect
          appendTo={newProps.appendTo}
          ariaLabelledBy={newProps.ariaLabelledBy}
          autoOptionFocus={newProps.autoOptionFocus}
          checkboxIcon={newProps.checkboxIcon}
          className={newProps.className}
          clearIcon={newProps.clearIcon}
          closeIcon={newProps.closeIcon}
          dataKey={newProps.dataKey}
          disabled={newProps.disabled}
          display={newProps.display}
          dropdownIcon={newProps.dropdownIcon}
          emptyFilterMessage={newProps.emptyFilterMessage}
          emptyMessage={newProps.emptyMessage}
          filter={newProps.filter}
          filterBy={newProps.filterBy}
          filterInputAutoFocus={newProps.filterInputAutoFocus}
          filterLocale={newProps.filterLocale}
          filterMatchMode={newProps.filterMatchMode}
          filterPlaceholder={newProps.filterPlaceholder}
          filterTemplate={newProps.filterTemplate}
          fixedPlaceholder={newProps.fixedPlaceholder}
          flex={newProps.flex}
          focusOnHover={newProps.focusOnHover}
          id={newProps.id}
          inline={newProps.inline}
          inputId={newProps.inputId ?? newProps.id}
          inputRef={newProps.inputRef}
          invalid={newProps.invalid}
          itemCheckboxIcon={newProps.itemCheckboxIcon}
          itemClassName={newProps.itemClassName}
          itemTemplate={newProps.itemTemplate}
          loading={newProps.loading}
          loadingIcon={newProps.loadingIcon}
          maxSelectedLabels={newProps.maxSelectedLabels}
          name={newProps.name}
          optionDisabled={newProps.optionDisabled}
          optionGroupChildren={newProps.optionGroupChildren}
          optionGroupLabel={newProps.optionGroupLabel}
          optionGroupTemplate={newProps.optionGroupTemplate}
          optionLabel={newProps.optionLabel}
          options={newProps.options}
          optionValue={newProps.optionValue}
          overlayVisible={newProps.overlayVisible}
          panelClassName={newProps.panelClassName}
          panelFooterTemplate={newProps.panelFooterTemplate}
          panelHeaderTemplate={newProps.panelHeaderTemplate}
          panelStyle={newProps.panelStyle}
          placeholder={newProps.placeholder}
          pt={newProps.pt}
          ptOptions={newProps.ptOptions}
          removeIcon={newProps.removeIcon}
          resetFilterOnHide={newProps.resetFilterOnHide}
          scrollHeight={newProps.scrollHeight}
          selectAll={newProps.selectAll}
          selectAllLabel={newProps.selectAllLabel}
          selectedItemsLabel={newProps.selectedItemsLabel}
          selectedItemTemplate={newProps.selectedItemTemplate}
          selectionLimit={newProps.selectionLimit}
          selectOnFocus={props.selectOnFocus}
          showClear={newProps.showClear}
          showSelectAll={newProps.showSelectAll}
          style={newProps.style}
          tabIndex={newProps.tabIndex}
          tooltip={newProps.tooltip}
          tooltipOptions={newProps.tooltipOptions}
          transitionOptions={newProps.transitionOptions}
          unstyled={newProps.unstyled}
          useOptionAsValue={newProps.useOptionAsValue}
          value={newProps.value ?? internalValue}
          onChange={handleChange}
          onHide={onHide}
        />
      </div>
      {newProps.errors && newProps.errors.length > 0 && (
        <div className="pt-1 space-y-1">
          {newProps.errors.map((error, index) => (
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
