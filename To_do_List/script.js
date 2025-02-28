const addclick=()=>{
    const task=document.getElementById('task');
    const taskinput=task.value.trim();

    if(taskinput !== ''){
        const tasklist=document.getElementById('tasklist');
        const li=document.createElement('li')
        li.innerHTML=`
        <input type="checkbox"> 
        `+ taskinput +`<i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-trash"></i>`;
        tasklist.appendChild(li);

    }else{
        alert("Please input TO DO ");
    }
}