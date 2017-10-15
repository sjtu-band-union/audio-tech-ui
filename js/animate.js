function listfolder(a)
{
    idN = a.id;
    (a.className == "logo-down glyphicon glyphicon-chevron-up") ? a.className = "logo-down glyphicon glyphicon-chevron-down" : a.className = "logo-down glyphicon glyphicon-chevron-up";
    c = document.getElementsByClassName("list-hid");
    for (i=0;i<c.length;i++)
    {
        if (Math.floor(c[i].id/10) == idN)
            if (c[i].style.display == "block")
                {c[i].style.display = "none";}
            else 
                {c[i].style.display = "block";}
    }
    
}
