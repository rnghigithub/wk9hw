const clearStorage = document.querySelector('.clear');
const emptyStorage = document.querySelector('.empty');{

const storageQuotaMsg = document.getElementbyId('storage-quota-msg');
const saveTextButton = document.getElementbyId('save-text');
const downloadLink = document.getElementById('save');
const textField = document.getElementbyId('textArea');



function localStorageToFile() {
 const text = (sessionStorage['autosave']);
    console.log(working);
    
    //Copy the redult on the Chrome Developer tools//

 const blob = new Blob([text], { type: "text/plain" });
 
if (window.URL ! == null) { 
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'storage.txt';
    download.target = '_blank';

} else {
      downloadLink.window.URL.createObjectURL(blob);
      downloadLink.target = '_blank';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink.download);
  } 
}

function localStorageSupport() {
    return typeof Storage !== 'undefined';
}

function localStorageAndQuota() {
 
  if (!localStorageSupport) {
        storageQuotaMsg.innerHTML = 'Unsupported HTML5 session storage'
  } else {
    try { sessionStorage.setItem('autosave', textField.value);
    } catch (error) { 
       if (
         error.name === 'QUOTA EXCEEDED ERROR' ||
         error.name === 'NS_ERROR_DOM_QUOTA_REACHED'
       ) {
          storageQuotaMsg.innerHTML = 'Session Storage Quota Exceeded';  
       }
     }
   } 
  }

function clearStorage() {
  textField.value = '';
  sessionStorage.removeItem('autosave' , myStory.value); 
}

function emptyStorage() {
  textField.value = '';
  sessionStorage.clear();
}

clearStorageButton.addEventListener('click' ,clearStorage);
emptyStorageButtom.addEventListener('click', emptyStorage);

saveTextButton.addEventListener('click', localStorageAndQuota);
textField.addEventListener('input', localStorageAndQuota);
downloadLink.addEventListener('click', localStorageToFile);

