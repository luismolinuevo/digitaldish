import axios from "axios";

const uploadFile = async (files) => {
  //Using FormData to allow for file upload. File uploading needs form data so that way the image data is constant. Think of this as a shell. Also to use the header "multipart/form-data" in which multer looks for to look for files.
  let newFormData = new FormData();

  //Append each file to the right key. You CANNOT append all the files to the key. It will not work.
  files.forEach((file) => {
    newFormData.append("images[]", file);
  });

  try {
    //Send the files to the server
    const uploadedFiles = await axios.post(
      "http://localhost:8080/upload",
      newFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    //Check to see if the files were uploaded
    if (uploadedFiles.status === 201) {
      console.log("uploaded just fine");
    }
  } catch (e) {
    //You might want to do more error handling here
    console.log(e);
  }
};

export { uploadFile };
