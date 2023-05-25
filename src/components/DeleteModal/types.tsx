export interface IProps {
  confirmDeleteInput: string;
  setConfirmDeleteInput: React.Dispatch<React.SetStateAction<string>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (character: string) => void;
  characterToDelete: string;
  selectedCharacterName: string;
  isLoading: boolean;
}
