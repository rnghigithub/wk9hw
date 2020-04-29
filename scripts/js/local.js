const clearStorage = document.getElementbyId('clearStorage');{
  document.addEventListener('click' , function(){
      document.getElementById('clearStorage').innerHTML = 'I Work';
  });

const emptyStorage = document.getElementbyId('emptyStorage');{
  document.addEventListener('click' , function(){
      document.getElementById('emptyStorage').innerHTML = 'I Work';
  });

const storageQuotaMsg = document.getElementbyId('storageQuotaMsg');{
  document.addEventListener('click' , function(){
      document.getElementById('storageQuotaMsg').innerHTML = 'I Work';
  });    

const saveTextButton = document.getElementbyId('saveTextButton');{
  document.addEventListener('click' , function(){
      document.getElementById('saveTextButton').innerHTML = 'I Work';
      console.log('Message saved to sessionStorage');
  });

const fileDownloadButton = document.getElementById('fileDowloadButton');{
  document.getElementById('click' , function(){
      document.getElementById('fileDownloadButton').innerHTML = 'i work';
});


const textField = document.getElementbyId('textField');{
document.addEventListener('click' ,  function(){
  document.getElementById('textField').innerHTML ='i work';
});   




function localStorageToFile(){
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

function localStorageSupport(){
  return typeof Storage !== 'undefined';
}

function localStorageAndQuota(){
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

function clearStorage() {
const myStory = document.getElementById('textArea');
myStory.value = '';
sessionStorage.removeItem('autosave' , myStory.value); 
}

function emptyStorage() {
const myStory = document.getElementById('textArea');
myStory.value = '';
sessionStorage.clear();
}
}



