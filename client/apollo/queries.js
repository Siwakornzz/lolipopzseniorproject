import gql from "graphql-tag";

// user
export const Me = gql`
  query ME {
    user {
      id
      username
      roles
      createdAt
      subcontracts {
        id
        name
        username
        email
        skill
        natureofwork
        yearskill
        tel
        member
        idcard
        budget
        lineid
        province
        district
        subdistrict
        zip
        nameofbank
        accountnumber
        nameofaccount
        promptpay
        status
        createdAt
      }
      hirecontracts {
        id
        condition
        detail
        typeofwork
        budget
        zone
        duration
        status
        createdAt
      }
    }
  }
`;

export const QUERY_USER = {
  query: `
    query {
      user {
        id
        username
        roles
        createdAt
      subcontracts{
        name
        username
        email
      }
    }
  }
  `,
};

// subcontract
// query one by one
export const QUERY_SUBCONTRACT = gql`
  query QUERY_SUBCONTRACT($id: ID!) {
    subcontract(id: $id) {
      id
      name
      username
      email
      skill
      natureofwork
      yearskill
      tel
      member
      idcard
      budget
      lineid
      province
      district
      subdistrict
      zip
      nameofbank
      accountnumber
      nameofaccount
      promptpay
      status
      createdAt
      hirecontractWorkId {
      id
      detail
      zone
      budget
    }
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

// query all of them
export const QUERY_SUBCONTRACTS = gql`
  query {
    subcontracts {
      id
      name
      username
      email
      skill
      natureofwork
      yearskill
      tel
      member
      idcard
      budget
      lineid
      province
      district
      subdistrict
      zip
      nameofbank
      accountnumber
      nameofaccount
      promptpay
      status
      createdAt
      hirecontractWorkId {
      id
      detail
      zone
      budget
    }
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

// hirecontract

// query one by one
export const QUERY_HIRECONTRACT = gql`
  query QUERY_HIRECONTRACT($id: ID!) {
    hirecontract(id: $id) {
      id
      condition
      detail
      typeofwork
      budget
      zone
      duration
      status
      createdAt
      subcontractAcceptHirecontractId{
        id
        name
      }
      hirecontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

// // query all of them
export const QUERY_HIRECONTRACTS = gql`
  query {
    hirecontracts {
      id
      condition
      detail
      typeofwork
      budget
      zone
      duration
      status
      createdAt
      subcontractAcceptHirecontractId{
        id
        name
      }
      hirecontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

// query hirecontract only waiting status
export const QUERY_HIRECONTRACTSWAITING = gql`
  query {
    hirecontractswaiting {
      id
      condition
      detail
      typeofwork
      budget
      zone
      duration
      status
      createdAt
      subcontractAcceptHirecontractId{
        id
        name
      }
      hirecontractCreatorId {
        id
        username
        email
      }
    }
  }
`;
