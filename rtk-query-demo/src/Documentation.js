import React from "react";

export default function Documentation() {
  return (
    <div className="" style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
       <div style={{ height:"90vh", width:"50%", border: 'none', borderRadius:"8px",  }}>
      <iframe
        src="https://docs.google.com/document/d/1BE_OzqHdURdN6izdUSnp5k_u7AdpRXizfJtoNiX7edM/preview"
        title="Google Docs Viewer"
        height="100%"
        width="100%"
        allow="fullscreen"
      ></iframe>
    </div>
    </div>
  );
}
