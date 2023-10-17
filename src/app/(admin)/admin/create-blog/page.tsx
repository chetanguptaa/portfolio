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
