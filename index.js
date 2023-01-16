let count=0


function increment()
{
    count=count+1
    console.log(count)
    document.getElementById("counter").innerText=count
}

function reset()
{
    let yes=confirm("Do you want to reset the counter?")
    if(yes){
        count=0
        document.getElementById("counter").innerText=count
        document.getElementById("save-el").textContent="Saved Entries: "
    }

}

function save()
{
    let countstr=count+"-"
    document.getElementById("save-el").textContent+=countstr
    document.getElementById("counter").textContent=0
    count=0
}



