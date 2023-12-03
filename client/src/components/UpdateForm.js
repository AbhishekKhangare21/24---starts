import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();
  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update note</h2>
      <form action="" onSubmit={store.updateNote}>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
          type="text"
          name="title"
        />
        <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
          name="body"
        />
        <button type="submit">Update note</button>
      </form>
    </div>
  );
}
