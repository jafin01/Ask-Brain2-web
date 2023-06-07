/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "@firebase/firestore";
import { auth, db, storage } from "config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Chat from "@/components/Chat/Chat";
import Button from "@/components/Button";

function CharacterForm({ isUpdate }: { isUpdate: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<File>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tryingOut, setTryingOut] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<any>({
    name: "",
    avatar: "",
    prompts: [{ role: "system", content: "" }],
    judge: {
      condition: "",
      message: "",
      numMessages: "",
    },
    firstMessage: "",
  });
  const router = useRouter();
  const { push } = router;

  async function getSelectedData() {
    const { id } = router.query;

    try {
      const docRef = doc(db, "characters", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { name, prompts, firstMessage, judge, docAvatar } =
          docSnap.data()!;
        setInitialValues({
          name,
          avatar: docAvatar,
          prompts,
          firstMessage,
          judge,
          showJudge: !!judge,
        });

        console.log(docSnap.data().avatar);
        setAvatar(docSnap.data().avatar);
      }
    } catch (error: any) {
      toast.error("Error getting document:", error);
    }
  }

  useEffect(() => {
    if (isUpdate) {
      getSelectedData();
    }
  }, [isUpdate]);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setIsLoading(true);

      const uploadAvatar = ref(storage, `/user/${avatar?.name}`);
      await uploadBytes(uploadAvatar, avatar!);
      const downloadedAvatarUrl = await getDownloadURL(uploadAvatar);

      if (!isUpdate) {
        await addDoc(collection(db, "characters"), {
          userId: auth.currentUser?.uid,
          name: values.name,
          avatar: downloadedAvatarUrl,
          prompts: values.prompts,
          firstMessage: values.firstMessage,
          judge: values.judge,
        });
        toast.success("character added successfully");
      } else {
        await updateDoc(doc(db, "characters", router.query.id as string), {
          name: values.name,
          prompts: values.prompts,
          avatar: isEditing ? downloadedAvatarUrl : avatar,
          firstMessage: values.firstMessage,
          judge: values.judge,
        });

        toast.success("character updated successfully");
      }

      push("/user");
    } catch (error: any) {
      toast.error("Error adding document: ", error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUpdate) setIsEditing(true);
    const file = e.target.files?.[0];
    console.log("file", file);
    setAvatar(file);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    prompts: Yup.array().of(
      Yup.object().shape({
        role: Yup.string().required("Role is required"),
        content: Yup.string().required("Content is required"),
      })
    ),
    judge: Yup.object()
      .when("$showJudge", {
        is: true,
        then: (schema) =>
          schema.shape({
            condition: Yup.string().required("Condition is required"),
            maxMessages: Yup.number().required("Max Messages is required"),
            message: Yup.string().required("Message is required"),
          }),
        otherwise: (schema) =>
          schema.shape({
            condition: Yup.string(),
            maxMessages: Yup.number(),
            message: Yup.string(),
          }),
      })
      .nullable(),
  });

  function setFormikFields(formikProps: any) {
    formikProps.setFieldValue("showJudge", !formikProps.values?.showJudge);

    formikProps.setFieldValue(
      "judge",
      !formikProps.values?.showJudge
        ? {
            condition: "",
            message: "",
            numMessages: 1,
          }
        : null
    );
  }

  return (
    <div className="bg-[#FFFAF5] min-h-screen flex justify-center items-center py-10">
      <div className="w-full max-w-md p-6 bg-white text-gray-600 rounded-2xl">
        <h1 className="text-4xl font-bold text-transparent text-center mb-8 text-black bg-clip-text">
          {!isUpdate ? "Create your character" : "Update your character"}
        </h1>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
                <label
                  htmlFor="avatar"
                  className="block h-36 w-36 rounded-full border-4 border-gray-200 overflow-hidden cursor-pointer mx-auto"
                >
                  {!isUpdate && avatar && (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="Avatar Preview"
                      className="h-full w-full object-cover"
                    />
                  )}

                  {!isUpdate && !avatar && (
                    <span className="h-full w-full flex items-center justify-center text-grad-green text-6xl">
                      +
                    </span>
                  )}

                  {isUpdate && avatar && !isEditing && (
                    <img
                      src={avatar.toString()}
                      alt="Avatar Preview"
                      className="h-full w-full object-cover"
                    />
                  )}

                  {isUpdate && avatar && isEditing && (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="Avatar Preview"
                      className="h-full w-full object-cover"
                    />
                  )}

                  {isUpdate && !avatar && (
                    <span className="h-full w-full flex items-center justify-center text-grad-green text-6xl">
                      +
                    </span>
                  )}
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  className="p-2 border border-gray-200 rounded"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <label className="flex flex-col gap-2" htmlFor="prompts">
                First message
              </label>
              <Field
                name="firstMessage"
                id="firstMessage"
                type="text"
                className="p-2 border border-gray-200 rounded"
              />
              <Button
                type="button"
                className={`flex flex-row gap-2 border rounded p-2 items-center justify-center ${
                  !formikProps.values?.showJudge
                    ? "border-gray-200"
                    : "border-gray-300"
                }`}
                onClick={() => setFormikFields(formikProps)}
              >
                {formikProps.values?.showJudge ? "Hide Judge" : "Add Judge"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    !formikProps.values?.showJudge
                      ? "text-black hover:text-gray-500"
                      : "text-gray-300 hover:text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d={
                      !formikProps.values?.showJudge
                        ? "M12 6v6m0 0v6m0-6h6m-6 0H6"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>
              </Button>
              {formikProps.values?.showJudge && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="judge">Judge number of messages</label>
                  <Field
                    name="judge.numMessages"
                    id="judge.numMessages"
                    type="number"
                    min={1}
                    className="p-2 border border-gray-200 rounded"
                  />
                  <ErrorMessage
                    name="judge.numMessages"
                    component="span"
                    className="text-red-500"
                  />
                  <label htmlFor="judge">Judge condition</label>
                  <Field
                    name="judge.condition"
                    id="judge.condition"
                    type="text"
                    className="p-2 border border-gray-200 rounded"
                  />
                  <ErrorMessage
                    name="judge.condition"
                    component="span"
                    className="text-red-500"
                  />
                  <label htmlFor="judge">Judge message</label>
                  <Field
                    name="judge.message"
                    id="judge.message"
                    type="text"
                    className="p-2 border border-gray-200 rounded"
                  />
                  <ErrorMessage
                    name="judge.message"
                    component="span"
                    className="text-red-500"
                  />
                </div>
              )}
              <label className="flex flex-col gap-2" htmlFor="prompts">
                Prompt
              </label>
              {/* Prompt field array */}
              <FieldArray name="prompts">
                {({ push: innerPush, remove }) => (
                  <div className="flex flex-col gap-2">
                    {formikProps.values?.prompts?.map(
                      (_: unknown, index: number) => (
                        <div>
                          <div className="flex gap-2 justify-end flex-col items-stretch">
                            <Field
                              as="select"
                              name={`prompts.${index}.role`}
                              id={`prompts.${index}.role`}
                              className="p-2 border border-gray-200 rounded flex-grow"
                            >
                              <option value="system">
                                Character instructions
                              </option>
                              <option value="user">User</option>
                              <option value="assistant">Character</option>
                            </Field>
                            <Field
                              as="textarea"
                              name={`prompts.${index}.content`}
                              id={`prompts.${index}.content`}
                              rows={3}
                              placeholder="Enter content"
                              className="p-2 border border-gray-200 rounded flex-grow"
                            />
                            <Button type="button" onClick={() => remove(index)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-500 hover:text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </Button>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-center">
                            <ErrorMessage
                              name={`prompts.${index}.content`}
                              component="span"
                              //  center error message
                              className="text-red-500 m-4"
                            />
                          </div>
                        </div>
                      )
                    )}
                    <Button
                      type="button"
                      onClick={() => innerPush({ role: "user", content: "" })}
                      className="flex flex-row gap-2 border border-gray-200 rounded p-2 items-center justify-center"
                    >
                      Add Prompt
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </Button>
                  </div>
                )}
              </FieldArray>

              <div className="flex flex-row gap-3 justify-end items-center mt-4">
                <Link href="/user">
                  <p className="text-black underline">Cancel</p>
                </Link>
                <Button
                  disabled={isLoading}
                  onClick={() => setTryingOut(!tryingOut)}
                  type="button"
                  className="font-bold py-2 px-4 rounded border border-gray-600"
                >
                  {tryingOut ? "Hide chat" : "Try out"}
                </Button>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="text-white font-bold py-2 px-4 rounded bg-gray-800 hover:bg-gray-700"
                >
                  {isLoading ? "Saving..." : "Save"}
                </Button>
              </div>
              <div
                className="relative"
                style={{
                  width: "100%",
                  height: "500px",
                  position: "relative",
                  display: tryingOut ? "block" : "none",
                }}
              >
                <Chat
                  firstMessage={formikProps.values.firstMessage}
                  prompts={formikProps.values.prompts}
                  judge={formikProps.values.judge}
                  characterName={formikProps.values.name}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CharacterForm;
