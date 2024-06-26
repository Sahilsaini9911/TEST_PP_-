import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserCommunicationList } from "./userCommunication/UserCommunicationList";
import { UserCommunicationCreate } from "./userCommunication/UserCommunicationCreate";
import { UserCommunicationEdit } from "./userCommunication/UserCommunicationEdit";
import { UserCommunicationShow } from "./userCommunication/UserCommunicationShow";
import { UserRequestList } from "./userRequest/UserRequestList";
import { UserRequestCreate } from "./userRequest/UserRequestCreate";
import { UserRequestEdit } from "./userRequest/UserRequestEdit";
import { UserRequestShow } from "./userRequest/UserRequestShow";
import { PrivacyAgreementList } from "./privacyAgreement/PrivacyAgreementList";
import { PrivacyAgreementCreate } from "./privacyAgreement/PrivacyAgreementCreate";
import { PrivacyAgreementEdit } from "./privacyAgreement/PrivacyAgreementEdit";
import { PrivacyAgreementShow } from "./privacyAgreement/PrivacyAgreementShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { CompanyDataList } from "./companyData/CompanyDataList";
import { CompanyDataCreate } from "./companyData/CompanyDataCreate";
import { CompanyDataEdit } from "./companyData/CompanyDataEdit";
import { CompanyDataShow } from "./companyData/CompanyDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Personal Data Management Platform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserCommunication"
          list={UserCommunicationList}
          edit={UserCommunicationEdit}
          create={UserCommunicationCreate}
          show={UserCommunicationShow}
        />
        <Resource
          name="UserRequest"
          list={UserRequestList}
          edit={UserRequestEdit}
          create={UserRequestCreate}
          show={UserRequestShow}
        />
        <Resource
          name="PrivacyAgreement"
          list={PrivacyAgreementList}
          edit={PrivacyAgreementEdit}
          create={PrivacyAgreementCreate}
          show={PrivacyAgreementShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="CompanyData"
          list={CompanyDataList}
          edit={CompanyDataEdit}
          create={CompanyDataCreate}
          show={CompanyDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
