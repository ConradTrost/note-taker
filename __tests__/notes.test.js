const fs = require("fs");
const {
  createNewNote,
  validateNote,
} = require("../lib/notes.js");
const { notes } = require("../db/db.json");

jest.mock('fs');

test("creates an note object", () => {
    const note = createNewNote(
      { title: "Test", text: "Test", id: "1234" },
      notes
    );
  
    expect(note.name).toBe("Test");
    expect(note.text).toBe("Test");
    expect(note.id).toBe("1234");
  });