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
 updataColor();