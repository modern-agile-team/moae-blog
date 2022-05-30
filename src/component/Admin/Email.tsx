interface Props {
  email: string;
}

const EmailList = ({ email }: Props) => {
  return <li>{email}</li>;
};

export default EmailList;
