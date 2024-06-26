import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanyDataTitle } from "../companyData/CompanyDataTitle";
import { PrivacyAgreementTitle } from "../privacyAgreement/PrivacyAgreementTitle";
import { UserCommunicationTitle } from "../userCommunication/UserCommunicationTitle";
import { UserRequestTitle } from "../userRequest/UserRequestTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="companyDataItems"
          reference="CompanyData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyDataTitle} />
        </ReferenceArrayInput>
        <TextInput label="ContactInfo" multiline source="contactInfo" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="privacyAgreements"
          reference="PrivacyAgreement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrivacyAgreementTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userCommunications"
          reference="UserCommunication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserCommunicationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userRequests"
          reference="UserRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
