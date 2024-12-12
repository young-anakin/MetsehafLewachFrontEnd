// import React from 'react'
import React, { useState, useRef} from 'react';
import JoditEditor from "jodit-react"
const TextEntry = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const handleChange = (newContent: string) => {
        // Update state only when necessary
        setContent(newContent);
      };
    // const config = {
    //     placeholder: "Start typing...",
    //     // height: 400, // Keep this as a number or string
    //     // toolbarAdaptive: false,
    //     // toolbarSticky: true,
    //     // defaultMode: 1, // Changed from "1" to 1 to match the expected type
    //     style: {
    //       color: "black", // Set the text color to black
    //     },
    //     // buttons: [
    //     //   "bold",
    //     //   "italic",
    //     //   "underline",
    //     //   "font",
    //     //   "fontsize",
    //     //   "brush",
    //     //   "paragraph",
    //     //   "align",
    //     //   "outdent",
    //     //   "indent",
    //     //   "ul",
    //     //   "ol",
    //     // ],
    //   };
      
      
  return (
    <div>
        <JoditEditor
            
			ref={editor}
			value={content}
			config={
                {
                    // height : {80}
                    style: {
                        height : "400px",
                        color: "black", // Set text color to black
                    },                }
            }
			// tabIndex={1} // tabIndex of textarea
			// onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => handleChange(newContent)} // Still allow onChange if needed
            />
        
        {content}
    </div>
  )
}

export default TextEntry