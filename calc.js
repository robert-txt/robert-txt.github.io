										var wynik;
										
										function dzialanie()
										{
										 /*if (isNaN(waga) == true
										    || isNaN(dl) == true
										    || isNaN(szer) == true
										    || isNaN(wys) == true)
										    {alert("Można wpisywać tylko liczby")}*/
										    var waga= parseInt(document.getElementById("weight").value);
											var dl= parseInt(document.getElementById("x").value);
											var szer= parseInt(document.getElementById("y").value);
											var wys= parseInt(document.getElementById("z").value);
										    var typ = document.getElementById("type").value;
										 switch(typ)
										  {
										   case "pack":
											   if (waga<=5)
										    {
										    	if(dl<=10 && szer<=10 && wys<=10){
										    		wynik = 17.5;
										    	}
										    }
											else if (waga<=10)
											{
												if(dl<=20 && szer<=20 && wys<=20){
										    		wynik = 18;
										    	}
										    }
										    else if (waga<=20)
											{
												if(dl<=20 && szer<=20 && wys<=20){
										    		wynik = 19;
										    	}
										    }
										    else if (waga<=30)
											{
												if(dl<=20 && szer<=20 && wys<=20){
										    		wynik = 20;
										    	}
										    }
										    else if (waga<=50)
											{
												if(dl<=20 && szer<=20 && wys<=20){
										    		wynik = 40;
										    	}
											};
										   break;
										   case "letter":
										   wynik = "Nie wiem kurwa xD";
										   
										   break;
										   case "pallet":
										   if (waga<=100)
										    {
										    		wynik = 125;
										    }
											else if (waga<=200)
											{
										    		wynik = 135;
										    }
										    else if (waga<=300)
											{
										    		wynik = 145;
										    }
										    else if (waga<=500)
											{
										    		wynik = 160;
										    }
										    else if (waga<=1000)
											{
										    		wynik = 180;
										    }
										   break;
										  }
										document.getElementById("result").innerHTML = wynik + " złotych";
										}
								/*</script>
								<!--<script language="JavaScript">
								var frmvalidator2 = new Validator("calc");
								frmvalidator2.addValidation("weigh","req","Proszę podaj wagę paczki"); 
								frmvalidator2.addValidation("x","req","Proszę podaj wymiar x"); 
								frmvalidator2.addValidation("y","req","Proszę podaj wymiar y");
								frmvalidator2.addValidation("y","req","Proszę podaj wymiar z"); 
								</script>*/