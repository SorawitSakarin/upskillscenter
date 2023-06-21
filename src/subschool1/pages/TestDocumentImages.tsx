import React from "react";

interface TestDocumentImagesProps{
    documentImages : any;
}

const TestDocumentImages:React.FC<TestDocumentImagesProps> = ({documentImages}) =>{



    return(
        <div className="test-doc-img">
            {documentImages.map((documentImage:any, index:number)=>{
                return (
                
                        <img src={documentImage} key={index}/>
                    
                )
            })}
        </div>
    )
}


export default TestDocumentImages;