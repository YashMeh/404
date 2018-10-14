$(document).ready(function(){
    console.log("Connected!!");
    var members=[]
    //Event added on team_register button !!
    $("#team_register").on("click",function(event){
        console.log("Clicked");
        var teamname=$("#teamName").val();
        for(var i=1;i<=4;i++)
        {
            var name=$("#name"+i).val();
            var regno=$("#regno"+i).val();
            var email=$("#email"+i).val();
            var roomno=$("#roomno"+i).val();
            var pnum=$("#pnum"+i).val();
            var ob={
                name:name,
                email:email,
                rollno:regno,
                roomno:roomno,
                phone:pnum
            }
            if(name!="" && regno!="" && email!="" && roomno!="" && pnum!="")
            {
                console.log("added");
                members.push(ob);
            }
            
            
        }
        var data=
        {
            
            name:teamname,
            ppl:members
        };
        console.log(data);
        if(members.length>=1)
        {
            $.ajax({
                //add header
                type:"POST",
                url:"http://hackaportal.herokuapp.com/teams/add",
                data:
                {
                    
                    name:teamname,
                    ppl:members
                },
                headers:
                    {"Access-Control-Allow-Origin":"*"
                    }
                
                
            }).done(function(data){
                console.log(data);
            }).fail(function(err){
                //console.log(members);
                //console.log(members.length);
                console.log("Error Occured");
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
        var name=$("#teamname").val();
        var pass=$("#pass").val();
        if(name!="" && pass!="")
        {
            $.ajax({
                //add header
                type:"POST",
                url:"http://hackaportal.herokuapp.com/team/login",
                data:{
                    "username":name,
                    "password":pass
                }
            }).done(function(token){
                //use token
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
                url:"http://hackaportal.herokuapp.com/addPitch1",
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
                url:"http://hackaportal.herokuapp.com/team/addRepo",
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
