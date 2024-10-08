import NoteForm from "../../components/NoteForm";
import TopBar from "../../components/TopBar";

export default function AddNote() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <TopBar />
      <h1 className="text-3xl font-bold mb-8 mt-24">Add a New Note</h1>
      <NoteForm />
    </main>
  );
}