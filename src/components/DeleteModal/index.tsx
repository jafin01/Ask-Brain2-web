import React from 'react';
import { IProps } from './types';
import Button from '../Button';

export default function ConfirmDelete({
  confirmDeleteInput,
  setConfirmDeleteInput,
  setShowDeleteModal,
  handleDelete,
  characterToDelete,
  selectedCharacterName,
  isLoading,
}: IProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p>
          Enter <strong>{selectedCharacterName}</strong> to confirm deletion:
        </p>
        <input
          type="text"
          value={confirmDeleteInput}
          placeholder="Enter character name"
          onChange={(e) => setConfirmDeleteInput(e.target.value)}
          className="border w-full rounded-md px-4 py-1 mt-2"
        />
        <div className="flex justify-end mt-4">
          <Button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={() => {
              setShowDeleteModal(false);
              setConfirmDeleteInput('');
            }}
          >
            Cancel
          </Button>

          <Button
            disabled={isLoading}
            className="px-4 py-2 bg-red-700 text-white rounded-md ml-2"
            onClick={() => handleDelete(characterToDelete)}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </div>
    </div>
  );
}
