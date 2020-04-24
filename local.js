const clearStorage = document.getElementbyId('clearStorage');
const emptyStorage = document.getElementbyId('emptyStorage');
const storageQuotaMsg = document.getElementbyId('storageQuotaMsg');
const saveTextButton = document.getElementbyId('saveTextButton');
const textarea = document.getElementbyId('textarea');

function sessionStorageToFile(){
 const csv = JSON.stringify(sessionStorage['autosave']);
    console.log(); 
    
    //Copy the redult on the Chrome Developer tools//

 const csvAsBlob = new Blob([csv], { type: "text/plain"});
 const fileNameToSaveAs = document.getElementById('session-storage.txt');
 
 const downloadLink = document.getElementById('save');
    downloadLink.download = fileNameToSaveAs;
 
    const createObjectURL = URL.createObjectURL(object);   

if (window.URL ! == null){
    downloadLink.href = window.URL.createObjectURL(csvAsBlob);
    downloadLink.target = '_blank';
  else {
      downloadLink.window.URL.createObjectURL(csvAsBlob);
      downloadLink.target = '_blank';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink.download);
  } 
}

function sessionStorageSupport(){
    return typeof Storage !== 'undefined';
}

function sessionStorageAndQuota(){
    let myStory = document.getElementById('textArea').nodeValue;
  if (!sessionStorageSupport) {
        storageQuotaMsg.innerHTML = 'Unsupported HTML5 session storage'
  } else {
       try {
         if (sessionStorage.getItem('autosave' , myStory)) {
             myStory = sessionStorage.getItem('autosave', myStory);              
  } else { sessionStorage.setItem('autosave' , myStory);
    }
    catch (domException){
        domException = new DOMException();
       if (
         domException.name === 'QUOTA EXCEEDED ERROR' 
         domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
       ) {
          storageQuotaMsg.innerHTML = 'Session Storage Quota Exceeded';  
       }
    }
  } 
 }

}

