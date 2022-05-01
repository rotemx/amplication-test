import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="color"
          label="color"
          choices={[
            { label: "Blue", value: "Blue" },
            { label: "Red", value: "Red" },
            { label: "Green", value: "Green" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
