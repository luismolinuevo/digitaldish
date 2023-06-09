import { useState } from 'react';

export default function Upload() {
    const [fileInput, setFileInput] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
    }

    return (
        <div className='flex flex-col items-center'>
            <h1 className='p-2'>Upload</h1>
            <form >
                <input 
                    type="file"
                    name="image" 
                    onChange={handleFileInputChange}
                    value={fileInput}
                    className='px-1 pb-2'
                />
                <button 
                    className='bg-green-500 w-[8vw] text-white text-xl p-2 ml-0 rounded-lg flex flex-col items-center hover:bg-green-700' 
                    type="button"
                    onClick={""}
                    variant="gradient"
                >Submit
                </button>
            </form>
        </div>
    )
}