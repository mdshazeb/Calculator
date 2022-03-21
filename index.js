let data=document.getElementById('input')
let screen_val
function getvalues(values)
{
     if(values==='ans')
      data.value=eval(screen_val)
     else if(values==='clr')
      data.value=""
    else
    {
        data.value+=values
        screen_val=data.value
    }
    
}