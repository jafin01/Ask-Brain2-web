// import React from 'react';

// export default function index() {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
//       <div className="bg-white p-6 rounded-md">
//         <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
//         <p>Enter the character&apos;s name to confirm deletion:</p>
//         <input
//           type="text"
//           value={confirmDeleteInput}
//           onChange={(e) => setConfirmDeleteInput(e.target.value)}
//           className="border rounded-md px-2 py-1 mt-2"
//         />
//         <div className="flex justify-end mt-4">
//           <button
//             type="button"
//             className="px-4 py-2 bg-red-500 text-white rounded-md"
//             onClick={() => setShowDeleteModal(false)}
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
//             onClick={() => handleDelete(characterToDelete)}
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
