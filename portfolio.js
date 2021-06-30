function expand()
{
    let btn=document.getElementById("menu");
    let menu=document.getElementById("hiddennav");
    if(btn.classList.contains("fa-bars"))
    {
        btn.classList.remove("fa-bars")
        btn.classList.add("fa-times")
        menu.classList.add("visible")
        menu.classList.remove("hidden")
    }
    else
    {
        btn.classList.remove("fa-times")
        btn.classList.add("fa-bars") 
        menu.classList.remove("visible")
        menu.classList.add("hidden")

    }
    
    
}