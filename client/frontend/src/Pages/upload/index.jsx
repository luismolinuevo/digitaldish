import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../../Utils/upload-action";

function UploadPage() {
  const [files, setFiles] = useState();

  //Literally borrowing from the docs. This gets called each time a file is added/re-added.
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  //Using the dropzone hook
  //Can change the amount of files you want to upload at once.
  //Can also set the type of files that you want to accept. Please look at react dropzone docs to learn more
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 3,
  });

  //When button is clicked, the files are uploaded
  const uploadFileToCloudinary = async () => {
    await uploadFile(files);
  };

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button onClick={() => uploadFileToCloudinary()}>
        Upload Files to Cloudinary
      </button>
    </>
  );
}

export default UploadPage;
