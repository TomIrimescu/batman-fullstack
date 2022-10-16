import React from 'react';

type Person = {
	firstName: string;
  lastName: string;
  age: number;
  isLegal: boolean;
  address?: string;
};

const Customer = (props: Person) => {
  const { firstName, lastName, age, isLegal, address } = props;

  return (
    <div>
      <h1> Hello React</h1>
      <div>{ firstName } { lastName }</div>
      <div> age: { age }</div>
      {isLegal ? <div> Is Legal</div> : 
      <div> Is Not Legal</div>}
      <div>{ address }</div>                         
    </div>
  );
};

export default Customer;
