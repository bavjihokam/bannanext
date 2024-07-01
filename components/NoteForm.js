"use client"
export default function NoteForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const note = {
      title: formData.get('title'),
      content: formData.get('content')
    };
    console.log(note);
    // Here you can add your logic to handle the note submission,
    // like sending it to an API or updating the state.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto mt-10">
      <label htmlFor="title" className="mb-2 font-bold">Title</label>
      <input type="text" id="title" name="title" className="mb-4 p-2 border rounded" required />

      <label htmlFor="content" className="mb-2 font-bold">Content</label>
      <textarea id="content" name="content" className="mb-4 p-2 border rounded" rows="5" required></textarea>

      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Note</button>
    </form>
  );
}