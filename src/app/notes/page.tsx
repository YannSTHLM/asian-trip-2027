"use client";

import { useState, useEffect } from "react";
import { Plus, Tag, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { formatDate } from "@/lib/utils";
import { getActiveTripFromRoute } from "@/lib/static-data";
import type { StaticNote, TripRoute } from "@/lib/static-data";
import toast from "react-hot-toast";

const STORAGE_KEY = "user_notes";

function loadPersistedNotes(): StaticNote[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function savePersistedNotes(notes: StaticNote[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export default function NotesPage() {
  const [notes, setNotes] = useState<StaticNote[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const route = (localStorage.getItem("activeRoute") || "taiwan-philippines") as TripRoute;
    const trip = getActiveTripFromRoute(route);
    const seedNotes = trip?.notes || [];
    const persisted = loadPersistedNotes();
    const all = [...seedNotes, ...persisted];
    setNotes(all);
    setLoaded(true);
  }, []);

  const allTags = [...new Set(notes.flatMap((n) => n.tags))].sort();

  const filteredNotes = filterTag
    ? notes.filter((n) => n.tags.includes(filterTag))
    : notes;

  const handleAddNote = () => {
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const newNote: StaticNote = {
      id: "user_" + Date.now(),
      tripId: "",
      title,
      content,
      tags,
      date: new Date().toISOString().split("T")[0],
    };
    const persisted = loadPersistedNotes();
    persisted.unshift(newNote);
    savePersistedNotes(persisted);
    setNotes((prev) => [newNote, ...prev]);
    setShowAdd(false);
    setTitle("");
    setContent("");
    setTagsInput("");
    toast.success("Note added");
  };

  const handleDeleteNote = (id: string) => {
    const persisted = loadPersistedNotes().filter((n) => n.id !== id);
    savePersistedNotes(persisted);
    setNotes((prev) => prev.filter((n) => n.id !== id));
    toast.success("Note deleted");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notes</h1>
          <p className="text-muted text-sm mt-1">
            {notes.length} entries
          </p>
        </div>
        <Button onClick={() => setShowAdd(true)}>
          <Plus className="h-4 w-4" /> New Note
        </Button>
      </div>

      {allTags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="h-4 w-4 text-muted" />
          <button
            onClick={() => setFilterTag(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              !filterTag
                ? "bg-primary text-white"
                : "bg-foreground/10 text-foreground hover:bg-foreground/20"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filterTag === tag
                  ? "bg-primary text-white"
                  : "bg-foreground/10 text-foreground hover:bg-foreground/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {!loaded && (
        <Card>
          <div className="text-center py-12">
            <p className="text-muted">Loading notes...</p>
          </div>
        </Card>
      )}

      {loaded && filteredNotes.length === 0 && (
        <Card>
          <div className="text-center py-12">
            <p className="text-muted">
              {notes.length === 0
                ? "No notes yet. Add your first journal entry!"
                : "No notes with this tag."}
            </p>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotes.map((note) => (
          <Card key={note.id} className="flex flex-col">
            <div className="flex-1">
              <h3 className="font-semibold mb-1 line-clamp-2">{note.title}</h3>
              <p className="text-sm text-muted line-clamp-3 whitespace-pre-wrap">
                {note.content.replace(/[#*]/g, "").trim()}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-card-border space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDate(note.date)}
                </span>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-xs text-muted hover:text-danger transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        title="New Note"
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
              placeholder="Note title"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm min-h-[150px]"
              placeholder="Write your note here... (markdown supported)"
            />
          </div>
          <div>
            <label className="text-sm font-medium">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
              placeholder="food, tip, memory"
            />
          </div>
          <Button onClick={handleAddNote} className="w-full">
            Save Note
          </Button>
        </div>
      </Modal>
    </div>
  );
}
