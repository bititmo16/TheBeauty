
function tinh(){
					var b = parseInt(document.getElementById('soB').value);
					var a = parseInt(document.getElementById('soA').value);
					var i=1;
					while((a*i)%b!=0){
						i++;
					}
					var c=a*i;
					document.getElementById("soC").value = c;
				}


					function vatli(){
						var web = [
							 
								{"name":"nguyen van quang", "age": 22},
						
								{"ten":"nguen tuan anh", "age": 44}
							
								];

						// var ojweb = JSON.parse(web);
						var cls = document.getElementById('lp').value;

						if (cls == "") {
							alert(web.ten);
							
						}
						else {alert("Nhap sai lop roi con!");}

						

						}
				
