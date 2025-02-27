const colorGenerator=()=>{
    const r =Math.floor(Math.random()*255);
    const g =Math.floor(Math.random()*255);
    const b =Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}


 const updataColor=()=>{
    const color=colorGenerator();
    const colorBox=document.getElementById('colordiv');
    const rgbcode=document.getElementById('rgbcode');
    colorBox.style.backgroundColor=color;
    rgbcode.innerText=color
    
 }



 const copyColorCode =()=>{
    const rgbcode=document.getElementById('rgbcode');
    const copybtn =document.getElementById('copybtn');
    copybtn.innerText='Copied'
    const input=document.createElement('input')
    document.body.appendChild(input);
    input.value=rgbcode.innerText;

    input.select();
    document.execCommand('copy');
    document.body.removeChild(input)
 }



 document.getElementById('copybtn').addEventListener('click',()=>{
    copyColorCode();
    

  })

