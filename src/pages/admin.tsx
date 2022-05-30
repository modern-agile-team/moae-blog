import { AdminButton, AdminInput, AdminWrapper } from "../component/Admin";
import TopBar from "../component/TopBar/TopBar";

const Admin = () => {
  const categories = [
    {
      id: "1283078as",
      name: "Front-End",
      link: "/categori/frontend",
    },
    {
      id: "1237uyxzc",
      name: "Back-End",
      link: "/categori/backend",
    },
    {
      id: "123213uyxzc",
      name: "Design",
      link: "/categori/design",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "/categori/computerscience",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "/categori/computerscience",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "/categori/computerscience",
    },
  ];
  return (
    <div>
      <TopBar categories={categories} />
      <AdminWrapper>
        <AdminInput />
        <AdminButton />
      </AdminWrapper>
    </div>
  );
};

export default Admin;
