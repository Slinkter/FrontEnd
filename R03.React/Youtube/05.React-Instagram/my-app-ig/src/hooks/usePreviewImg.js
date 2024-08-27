import React, { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const showToast = useShowToast();
    const maxFileSizeInBytes = 2 * 1024 * 1024;

    const handleImageChange = (e) => {
        const file = e.target.file[0];
        if (file && file.type.startsWith("image/")) {
            if (file.size > maxFileSizeInBytes) {
                showToast("error", "file size must be less than 2MB", "error");
                setSelectedFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            showToast("error", "Please select an image file", "error");
            return;
        }
    };
    return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
