import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabelContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabelContainer className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormInput;
