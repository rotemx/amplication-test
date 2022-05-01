import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
