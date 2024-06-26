import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const PrivacyAgreementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="Version" source="version" />
      </SimpleForm>
    </Create>
  );
};
