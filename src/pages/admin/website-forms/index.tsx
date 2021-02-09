import { List, ListItem } from "@material-ui/core";
import React from "react";
import AdminLayout from "../adminLayout";

type FormProps = { id: number; message: string };
export default function Index() {
  const [forms, setForms] = React.useState<FormProps[]>([]);
  const fetchData = async () => {
    try {
      const res = await fetch("../../server/index.php?fetchforms=true");
      const data: FormProps[] = await res.json();
      if (Array.isArray(data)) {
        setForms(data);
      } else {
        throw new TypeError("No payload");
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  console.log(forms);
  return (
    <AdminLayout>
      <div>
        {forms.length ? (
          <List>
            {forms.map(item => (
              <ListItem key={item.id}>{item.message}</ListItem>
            ))}
          </List>
        ) : (
          <p>Loading website forms....</p>
        )}
      </div>
    </AdminLayout>
  );
}
