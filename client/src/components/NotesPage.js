import React from "react";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

const NotesPage = () => {
  return (
    <>
      <Notes />
      <UpdateForm />
      <CreateForm />
    </>
  );
};

export default NotesPage;
