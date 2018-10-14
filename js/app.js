$(document).ready(function(){
    console.log("Connected!!");
    var ppl=[], name, regno, email, roomno, pnum,ob={}
    //Event added on team_register button !!
    $("#team_register").on("click",function(event){
        console.log("Clicked");
        var teamname=$("#teamName").val();
        for(var i=1;i<=4;i++)
        {
            name=$("#name"+i).val();
            regno=$("#regno"+i).val();
            email=$("#email"+i).val();
            roomno=$("#roomno"+i).val();
            pnum=$("#pnum"+i).val();
            ob={
                name,
                email,
                rollno:regno,
                roomno,
                phone:pnum
            }
            if(name!="" && regno!="" && email!="" && roomno!="" && pnum!="")
            {
                ppl.push(ob)
            } else{
                alert("One or more fields empty");
                location.reload();
            }
            
            
        }

        var data={        
            name:teamname,
            ppl:JSON.stringify(ppl)
        };
        if(ppl.length>=3)
        {
           
            $.ajax({
                //add header
                type:"POST",
                url:"/teams/add",
                data,
                headers:
                    {"Access-Control-Allow-Origin":"*"},
                success:(data)=>{
                    if(data.message)
                        alert(data.message)
                    else 
                        alert("Done")
                }
                
                
            })
            
        }
        else
        {
            console.log("error");
            alert("Not enough members !!");
        }
    })
    //Event added on team_login button
    $("#team_login").on("click",function(event){
        event.preventDefault();
        var name=$("#teamname").val();
        var pass=$("#pass").val();
        if(name!="" && pass!="")
        {
            $.ajax({
                //add header
                type:"POST",
                url:"/teams/login",
                data:{
                    username:name,
                    password:pass
                }
            }).done(function(data){
                {
                    if(data.message)
                        alert(data.message)
                    else{
                        localStorage.setItem("token",data.token);
                        window.location.replace("/teams/loggedIn")
                    }
                }
            }).fail(function(err){
                console.log("Error Occured !!");
            })
        }
        else
        {
            alert("Give Proper Details !!");
        }
    })
    //Adding event to psubmit button
    $("#psubmit").on("click",function(event){
        var title=$("#ptitle").val();
        var content=$("#pcontent").val();
        if(title!="" && content!="")
        {
            $ .ajax({
                //add header
                type:"POST",
                url:"/addPitch1",
                data:{
                    title:title,
                    content:content
                }
            }).done(function(data){
                //
            }).fail(function(err){
                console.log("Error occured on submitting pitch !!");
            })
        }
        else
        {
            alert("Give proper details !!");
        }
    })
    //Adding event on repo_submit button
    $("#repo_submit").on("click",function(event){
        var link=$("repolink").val();
        if(link!="")
        {
            $.ajax({
                //add header
                type:"POST",
                url:"/team/addRepo",
                data:{
                    data:link
                }
            }).done(function(data){
                //
            }).fail(function(err){
                console.log("Error occured while adding repo !!");
            })
        }
    })
    
})
