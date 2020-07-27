function addRow()
{
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var username = document.getElementById('username').value;
	var email = document.getElementById('ema').value;
	var age = document.getElementById('age').value;
	var phn = document.getElementById('phn').value;
	//var gender = document.getElementById('gender').value; 
    var gender;
    if (document.getElementById('g1').checked) {
  		gender = document.getElementById('g1').value;
		}
	else if (document.getElementById('g2').checked) {
		gender = document.getElementById('g2').value;
	}
	else if (document.getElementById('g3').checked) {
		gender = document.getElementById('g3').value;
	}

	var category;
	category = document.getElementById("category").value;

	var dt = new Date();
	var utcDate = dt.toUTCString();
 
	//Print results
	//console.log(utcDate);

	var myData = [];

	myData.push(fname, lname, username, email, age, phn, gender, category, utcDate);

	var table = document.getElementsByTagName('table')[0];

	var newRow = table.insertRow(table.rows.length);

	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);
	var cel5 = newRow.insertCell(4);
	var cel6 = newRow.insertCell(5);
	var cel7 = newRow.insertCell(6);
	var cel8 = newRow.insertCell(7);
	var cel9 = newRow.insertCell(8);

	cel1.innerHTML = myData[0];
	cel2.innerHTML = myData[1];
	cel3.innerHTML = myData[2];
	cel4.innerHTML = myData[3];
	cel5.innerHTML = myData[4];
	cel6.innerHTML = myData[5];
	cel7.innerHTML = myData[6];
	cel8.innerHTML = myData[7];
	cel9.innerHTML = myData[8];

	var form = document.getElementById("myForm");
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);
}

 function change(id) {
       var e = document.getElementById(id);
       if (id == "regi") {
       		var a = document.getElementById('first');
       		var b = document.getElementById('tab');
	       if(e.style.display == 'block'){
	          
	          //e.style.display = 'none';
	          

	      	}
	      	else {
	      		e.style.display = 'block';
	      		a.style.display = 'none';
	      		b.style.display = 'none';
	      	}
   		}
   		else if (id == "tab") {
   			var a = document.getElementById('first');
   			var b = document.getElementById('regi');
   			if (e.style.display == 'block') {
   				//e.style.display = 'none';
   				
   			}
   			else {
   				e.style.display = 'block';
   				a.style.display = 'none';
   				b.style.display = 'none';
   			}
   		}
   		else {
   			var a = document.getElementById('regi');
   			var b = document.getElementById('tab');
   			if (e.style.display == 'block') {
   				//e.style.display = 'none';
   				
   			}
   			else {
   				e.style.display = 'block';
   				a.style.display = 'none';
   				b.style.display = 'none';
   			}
   		}
   }