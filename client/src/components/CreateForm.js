import React from "react";
import notesStore from "../stores/notesStore";

const CreateForm = () => {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Create note</h2>
      <form onSubmit={store.createNote}>
        <input
          onChange={store.updateCreateFormField}
          name="title"
          value={store.createForm.title}
        />
        <textarea
          name="body"
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
};

export default CreateForm;
