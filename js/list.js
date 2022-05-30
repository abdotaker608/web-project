var xhtml= new XMLHttpRequest();
        text=" <thead><tr><th>ID</th><th>Name</th><th>Birth Date</th><th>GPA</th><th>Gender</th><th>Level</th><th>Status</th><th>Department</th><th>Email</th><th>Mobile No.</th></tr></thead>";
        xhtml.onreadystatechange =function() {
            if(this.readyState==4 && this.status==200){
                jData=JSON.parse(this.response);
                var k = '<tbody>';
                for(i = 0;i < jData.length; i++){  
                        k+= '<tr>';
                        k+= '<td>' + jData[i]["id"] + '</td>';
                        k+= '<td>' + jData[i]["name"] + '</td>';
                        k+= '<td>' + jData[i]["birth"] + '</td>';
                        k+= '<td>' + jData[i]["gpa"] + '</td>';
                        k+= '<td>' + jData[i]["gender"] + '</td>';
                        k+= '<td>' + jData[i]["level"] + '</td>';
                        k+= '<td>' + jData[i]["status"] + '</td>';
                        k+= '<td>' + jData[i]["department"] + '</td>';
                        k+= '<td>' + jData[i]["email"] + '</td>';
                        k+= '<td>' + jData[i]["mobile_number"] + '</td>';
                        k+= '</tr>';
                    }           
                k+='</tbody>';
                document.getElementById("table").innerHTML=text+k;
            }
        };
        xhtml.open('GET','https://web-project-api.herokuapp.com/students/',true);
        xhtml.send();
