const downloadBtn=document.querySelector(".download-btn");
const fileLink="Downloads\pagination"
const initTimer=()=>{
    let timer=downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    
    const initcounter=setInterval(()=>{
        if(downloadBtn.classList.contains("disable-timer")){
           return location.href=fileLink
        }
    if(timer>0){
        timer--;
    return (downloadBtn.innerHTML=`your file will downloaded in <b>${timer} </b>seconds`)
        
    }
    
    clearInterval(initcounter);
    
    downloadBtn.textContent="your file is downloading ..........."
    setTimeout(()=>{
        downloadBtn.classList.replace("timer","disable-timer");
        downloadBtn.innerHTML=` <i class="icon fa-solid fa-download"></i>
        <p class="text">Download Again</p>`
    })
    },1000)

}
downloadBtn.addEventListener('click',initTimer)

