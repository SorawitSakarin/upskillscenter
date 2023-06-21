import React, { useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import "./button.css";
import LoadingSpinner from "../LoadingSpinner";
import {FiDownload} from 'react-icons/fi'
import LoadingSpinnerPuff from "../LoadingSpinnerPuff";

interface DownloadButtonProps {
  backgroundColor: string;
  studentList: string;
  studentId: any;
  courseId: any;
  title: string;
  color: string;
  topic:string;
  file: any;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  title,
  backgroundColor,
  color,
  file,
  topic,
  studentList,
  studentId,
  courseId
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const clickHandler = async(base64:any,fileType:any) => {
    console.log("Download PDF success",file);
    console.log(studentList,studentId,courseId)
    setDownloaded(true);
    if(!studentList.split(',').includes(studentId)){
      
      try {
        const responseData = await sendRequest(
          import.meta.env.VITE_APP_BACKEND_URL + "/course/update/" + courseId,
          "PUT",
          JSON.stringify({
            studentList: studentId
          }),
          {
            "Content-Type": "application/json",
          }
          );
          console.log(responseData);
          
        } catch (err) {
          console.log(err);
          alert(err);
        }
        
      }
    
    const base64Response = base64.split(';base64,').pop();
    const byteCharacters = atob(base64Response);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: fileType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `Upskillscenter_${topic}_download.${fileType}`; // get the extension from fileType
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <div>
      <button
        onClick={()=>clickHandler(file,'pdf')}
        className={`download-btn bounce ${downloaded ? "stop-bounce" : ""}`}
        style={{ backgroundColor, color }}
      >
        {isLoading && <LoadingSpinnerPuff color={color} />}
        <FiDownload size={24}/>
        <h2>{title}</h2>
      </button>
    </div>
  );
};

export default DownloadButton;
