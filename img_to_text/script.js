const extractText = ()=>{
   const Input = document.getElementById('inputbtn');
   const output = document.getElementById('outputbtn');

   const imgFiles =Input.files[0];

   if(!imgFiles){
    output.textContent='Please Select an image file';
    return;
   }

Tesseract.recognize(
    imgFiles,
    `eng`
).then(({data})=>{
    output.textContent= data.text;
}).catch((error)=>{
console.error('Error',error)
output.textContent= 'Error';
})

}