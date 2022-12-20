import projects from "./project_data.js";

let oldScroll=window.scrollY;

window.onscroll=()=>
{

    if(window.scrollY>0)
    {

        document.querySelector("header").style.top="0%";
        document.querySelector("header").classList.add("header_sticky");
        if(window.scrollY>0 && window.scrollY<60)
        {
            document.querySelector("header").classList.remove("header_sticky");
        }
    }
    else if(window.scrollY==0)
    {
        document.querySelector("header").classList.remove("header_sticky");
    }

    if(oldScroll>window.scrollY)
    {
        document.querySelector("header").style.top="-10%";

    }
    
    oldScroll=window.scrollY;

}


let mobile_menu=document.querySelector("nav.mobile_menu");
let menu_open=document.querySelector(".fa-bars");
let menu_close=document.querySelector(".fa-xmark");

menu_open.onclick=function()
{

    mobile_menu.style.width=="60%"?mobile_menu.style.width="0%":mobile_menu.style.width="60%";
}

menu_close.onclick=function()
{
    mobile_menu.style.width="0%";
}

let project_container=document.querySelector(".project_container");
projects.map(item=>
{
    let project_item=`<div class='project_item ${item.type}'> <a href=${item.url} target='_blank'><img src=${item.imgSource} alt=''><div class='project_name_and_tool'><h2>${item.name}</h2><span>- ${item.tools}</span></div></a></div>`;

    project_container.innerHTML+=project_item;
})

let project_items=document.querySelectorAll(".project_item");
let buttons=document.querySelectorAll(".filter_button button");
let type=["all","website","illus","other"]

buttons=new Array(...buttons);
buttons.map((button,index)=>
{
    button.addEventListener("click",function()
    {
        filterProject(type[index],button);
    })  
})

function filterProject(pType,e)
{

    for(let button of buttons)
    {
        button.classList.remove("active");
    }

    e.classList.add("active");
    
    for(let project of project_items)
    {
        if(pType==="all")
        {
            project.style.display="";
        }
        else
        {
            if(project.classList.contains(pType))
            {
                project.style.display="";

            }
            else
            {
                project.style.display="none";

            }
        }
    }
}

