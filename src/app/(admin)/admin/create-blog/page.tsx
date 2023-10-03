"use client";

import React, { FormEvent, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuBar from "@/components/editor/TipTapMenuBar";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
  const session = useSession();
  const router = useRouter();
  React.useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [router, session]);
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState("");
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });
  const onSave = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const response = await axios.post("/api/save-blog", {
        title,
        editorState,
      });
      toast.success("Blog Created Successfully!");
      return response.data;
    } catch (error: any) {
      console.log("Saving failed", error.message);
      toast.error("Error saving the blog!");
    }
  };
  return (
    <>
      <div className="min-h-screen p-8">
        <div className="h-4"></div>
        <div className="border-stone-200 border rounded-lg px-16 py-8 w-full">
          <form onSubmit={onSave}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="border border-spacing-1 ml-3"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="p-8">
              <div className="max-w-4xl mx-auto">
                <div className="h-4"></div>
                <div className="px-16 py-8 w-full">
                  <div className="flex">
                    {editor && <TipTapMenuBar editor={editor} />}
                  </div>
                  <div className="prose prose-sm w-full mt-4">
                    <EditorContent editor={editor} />
                  </div>
                </div>
              </div>
            </div>
            <button>Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlogPage;

/**
 * i
import { clerk } from "@/lib/clerk-server";
import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";

const NoteBookPage = async ({ params: { noteId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/dashboard");
  }
  const user = await clerk.users.getUser(userId);
  const notes = await db
    .select()
    .from($notes)
    .where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, userId)));
  if (notes.length != 1) {
    return redirect("/dashboard");
  }
  const note = notes[0];
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center">
          <Link href="/dashboard">
            <Button className="bg-blue-600" size="sm">
              Back
            </Button>
          </Link>
          <div className="w-3"></div>
          <span className="font-semibold">
            {user.firstName} {user.lastName}
          </span>
          <span className="inline-block mx-1">/</span>
          <span className="text-stone-500 font-semibold">{note.name}</span>
          <div className="ml-auto">
            <DeleteButton noteId={note.id} />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full">
          <TipTapEditor note={note} />
        </div>
      </div>
    </div>
  );
};

export default NoteBookPage;
 */

/**
 * import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import TipTapEditor from "@/components/editor/TipTapEditor";

const CreateBlogPage = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [router, session]);
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center">
          <link href="/blogs">
            <button className="bg-blue-600">Back</button>
          </link>
          <div className="w-3"></div>
          <span className="inline-block mx-1">/</span>
        </div>
        <div className="h-4"></div>
        <div className="border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full">
          <TipTapEditor />
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
 */
