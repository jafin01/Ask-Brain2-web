/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ErrorMessage, Field, FieldArray, Form } from 'formik';
import Button from '@/components/Button';

function Variation({
  index,
  remove,
  formikProps,
  handleAvatarUpload,
  avatar,
  isUpdate,
  isEditing,
}: any) {
  return (
    <div className="w-full p-6 bg-white text-gray-600 rounded-2xl min-w-[500px] h-[fit-content] shadow-xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-black bg-clip-text">
        Variation {index + 2}
      </h1>
      <Form className="flex flex-col gap-2">
        <div className="relative">
          <input
            type="file"
            id={`variations[${index}].avatar`}
            name={`variations[${index}].avatar`}
            className="hidden"
            onChange={handleAvatarUpload}
          />
          <label
            htmlFor="avatar"
            className="block h-36 w-36 rounded-full border-4 border-gray-200 overflow-hidden cursor-pointer mx-auto"
          >
            {!isUpdate && avatar && (
              <img
                src={
                  typeof avatar === 'string'
                    ? avatar
                    : URL.createObjectURL(avatar)
                }
                alt="Avatar Preview"
                className="h-full w-full object-cover"
              />
            )}

            {!isUpdate && !avatar && (
              <span className="h-full w-full flex items-center justify-center text-6xl">
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
                src={URL.createObjectURL(avatar as Blob)}
                alt="Avatar Preview"
                className="h-full w-full object-cover"
              />
            )}

            {isUpdate && !avatar && (
              <span className="h-full w-full flex items-center justify-center text-6xl">
                +
              </span>
            )}
          </label>
        </div>

        <label className="flex flex-col gap-2">
          Name
          <Field
            type="text"
            id={`variations[${index}].name`}
            name={`variations[${index}].name`}
            placeholder="Enter name"
            className="p-2 border border-gray-200 rounded"
          />
          <ErrorMessage
            name={`variations[${index}].name`}
            component="span"
            className="text-red-500"
          />
        </label>

        <label className="flex flex-col gap-2">
          Limit number of messages
          <Field
            id={`variations[${index}].messagesLimit`}
            name={`variations[${index}].messagesLimit`}
            type="number"
            min="1"
            className="p-2 border border-gray-200 rounded"
          />
        </label>

        <label className="flex flex-col gap-2">
          First message
          <Field
            id={`variations[${index}].firstMessage`}
            name={`variations[${index}].firstMessage`}
            type="text"
            className="p-2 border border-gray-200 rounded"
          />
        </label>
        <Button
          type="button"
          className={`flex flex-row gap-2 border rounded p-2 items-center justify-center ${
            !formikProps.values?.variations?.[index]?.showJudge
              ? 'border-gray-200'
              : 'border-gray-300'
          }`}
          onClick={() => {
            formikProps.setFieldValue(
              `variations[${index}].showJudge`,
              !formikProps.values?.variations?.[index]?.showJudge
            );

            formikProps.setFieldValue(
              `variations[${index}].showJudge`,
              !formikProps.values?.variations?.[index]?.showJudge
                ? {
                    condition: '',
                    message: '',
                    numMessages: 1,
                  }
                : null
            );
          }}
        >
          {formikProps.values?.variations?.[index]?.showJudge
            ? 'Hide Judge'
            : 'Add Judge'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              !formikProps.values?.variations?.[index]?.showJudge
                ? 'text-black hover:text-gray-500'
                : 'text-gray-300 hover:text-gray-500'
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
                !formikProps.values?.variations?.[index]?.showJudge
                  ? 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                  : 'M6 18L18 6M6 6l12 12'
              }
            />
          </svg>
        </Button>
        {formikProps.values?.variations?.[index]?.showJudge && (
          <div className="flex flex-col gap-2">
            <label className="flex flex-col gap-2">
              Judge number of messages
              <Field
                name={`variations[${index}].judge.numMessages`}
                id={`variations[${index}].judge.numMessages`}
                type="number"
                min={1}
                className="p-2 border border-gray-200 rounded"
              />
              <ErrorMessage
                name={`variations[${index}].judge.numMessages`}
                component="span"
                className="text-red-500"
              />
            </label>
            <label className="flex flex-col gap-2">
              Judge condition
              <Field
                name={`variations[${index}].judge.condition`}
                id={`variations[${index}].judge.condition`}
                type="text"
                className="p-2 border border-gray-200 rounded"
              />
              <ErrorMessage
                name={`variations[${index}].judge.condition`}
                component="span"
                className="text-red-500"
              />
            </label>
            <label className="flex flex-col gap-2">
              Judge message
              <Field
                name={`variations[${index}].judge.message`}
                id={`variations[${index}].judge.message`}
                type="text"
                className="p-2 border border-gray-200 rounded"
              />
              <ErrorMessage
                name={`variations[${index}].judge.message`}
                component="span"
                className="text-red-500"
              />
            </label>
          </div>
        )}
        <label className="flex flex-col gap-2" htmlFor="prompts">
          Prompt
        </label>
        {/* Prompt field array */}
        <FieldArray name={`variations[${index}].prompts`}>
          {({ push: innerPush, remove: innerRemove }) => (
            <div className="flex flex-col gap-2">
              {formikProps.values?.variations?.[index]?.prompts?.map(
                (_: unknown, innerIndex: number) => (
                  <div>
                    <div className="flex gap-2 justify-end flex-col items-stretch">
                      <Field
                        as="select"
                        name={`variations[${index}].prompts.${innerIndex}.role`}
                        id={`variations[${index}].prompts.${innerIndex}.role`}
                        className="p-2 border border-gray-200 rounded flex-grow"
                      >
                        <option value="system">Character instructions</option>
                        <option value="user">User</option>
                        <option value="assistant">Character</option>
                      </Field>
                      <Field
                        as="textarea"
                        name={`variations[${index}].prompts.${innerIndex}.content`}
                        id={`variations[${index}].prompts.${innerIndex}.content`}
                        rows={3}
                        placeholder="Enter content"
                        className="p-2 border border-gray-200 rounded flex-grow"
                      />
                      <Button
                        type="button"
                        onClick={() => innerRemove(innerIndex)}
                      >
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
                        name={`variations[${index}].prompts.${innerIndex}.content`}
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
                onClick={() => innerPush({ role: 'user', content: '' })}
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
          <Button onClick={remove}>
            <p className="text-black underline">Remove</p>
          </Button>
          {/* <Button
                disabled={isLoading}
                onClick={() => setTryingOut(!tryingOut)}
                type="button"
                className="font-bold py-2 px-4 rounded border border-gray-600"
              >
                {tryingOut ? "Hide chat" : "Try out"}
              </Button> */}
        </div>
      </Form>
    </div>
  );
}

export default Variation;
