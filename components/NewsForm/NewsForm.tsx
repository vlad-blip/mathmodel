import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import axios from "axios";
import React, { useCallback, useMemo, useReducer, useRef } from "react";
import type { Options } from "easymde/types/easymde";

import "easymde/dist/easymde.min.css";
import uploadImage from "@/utils/uploadImage";

import styles from "./NewsForm.module.scss";

type NewsForm = {
  onClick: () => void;
};

type ImageUploadType = {
  (
    image: File,
    onSuccess: (url: string) => void,
    onError: (errorMessage: string) => void
  ): void;
};

export type FormStateType = {
  title: string;
  category: string;
  thumbnail: string;
  content: string;
};

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const formReducer = (
  state: FormStateType,
  { type, payload }: FormReducerType
) => {
  switch (type) {
    case "title":
      return { ...state, title: payload };
    case "category":
      return { ...state, category: payload };
    case "thumbnail":
      return { ...state, thumbnail: payload };
    case "content":
      return { ...state, content: payload };
    default:
      return state;
  }
};

const imageUploadFunction: ImageUploadType = async (image, onSuccess) => {
  try {
    const response = await uploadImage(image);

    const { secure_url } = response;

    onSuccess(secure_url);
  } catch (error) {
    console.error(error);
  }
};

type FormReducerType = {
  type: string;
  payload: string;
};

export default function NewsForm({ onClick }: NewsForm) {
  const [formState, dispatchForm] = useReducer(formReducer, {
    title: "",
    category: "",
    thumbnail: "",
    content: "",
  });

  const onThumbnailUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;

    const image = event.target.files[0] as File;

    try {
      const response = await uploadImage(image);

      const { secure_url } = response;

      console.log(secure_url);
      dispatchForm({ type: "thumbnail", payload: secure_url });
    } catch (error) {
      console.error(error);
    }
  };
  const formRef = useRef<HTMLFormElement>(null);

  const onBackgroundClickHandler = (event: any) => {
    event.stopPropagation();
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    onClick();
    axios.post("/api/create_news", formState);
  };

  const onDiscardHandler = () => {
    onClick();
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchForm({ type: "title", payload: event.target.value });
  };
  const categoryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatchForm({ type: "category", payload: event.target.value });
  };

  const contentChangeHandler = useCallback((content: string) => {
    dispatchForm({ type: "content", payload: content });
  }, []);

  const mdeOptions: Options = useMemo(
    () => ({
      uploadImage: true,
      imageUploadFunction,
      toolbar: [
        "heading-1",
        "heading-2",
        "heading-3",
        "|",
        "bold",
        "italic",
        "strikethrough",
        "link",
        "code",
        "quote",
        "|",
        "table",
        "image",
        "ordered-list",
        "unordered-list",
        "|",
        "fullscreen",
        "preview",
        "side-by-side",
      ],
    }),
    []
  );

  return createPortal(
    <div className={styles.background} onClick={onBackgroundClickHandler}>
      <form ref={formRef} className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.form__field}>
          <label htmlFor="title">Заголовок</label>
          <input
            id="title"
            type="text"
            value={formState.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.form__field}>
          <label htmlFor="category">Категорія</label>
          <select id="category" onChange={categoryChangeHandler}>
            <option value={formState.category} selected disabled>
              Оберіть категорію
            </option>
            <option value={"connection"}>Зв'язки та співробітництво</option>
            <option value={"conferences"}>Конференції, семінари</option>
            <option value={"science"}>Науково-дослідна робота</option>
            <option value={"press"}>Про нас пишуть</option>
          </select>
        </div>
        <div className={styles.form__field}>
          <label htmlFor="thumbnail">Обложка</label>
          <input
            id="thumbnail"
            type="file"
            accept="image/png, image/jpg, image/webp"
            onChange={onThumbnailUpload}
          />
        </div>
        <SimpleMdeEditor
          onChange={contentChangeHandler}
          options={mdeOptions}
          value={formState.content}
        />
        <div className={styles.controls}>
          <button type="submit">Створити</button>
          <button onClick={onDiscardHandler}>Відмінити</button>
        </div>
      </form>
    </div>,
    document.body
  );
}
