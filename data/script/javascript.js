var Firstnumber = parseFloat("0");

var Secondnumber = parseFloat("0");

var egal = parseFloat("0");

var operation;

var input = document.getElementById("text")
function button1(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "1";

	else

		document.getElementById("text").value = document.getElementById("text").value + "1";

}

function button2(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "2";

	else

		document.getElementById("text").value = document.getElementById("text").value + "2";

}

function button3(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "3";

	else

		document.getElementById("text").value = document.getElementById("text").value + "3";

}

function button4(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "4";

	else

		document.getElementById("text").value = document.getElementById("text").value + "4";

}

function button5(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "5";

	else

		document.getElementById("text").value = document.getElementById("text").value + "5";

}
function button6(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "6";

	else

		document.getElementById("text").value = document.getElementById("text").value + "6";

}
function button7(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "7";

	else

		document.getElementById("text").value = document.getElementById("text").value + "7";

}
function button8(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "8";

	else

		document.getElementById("text").value = document.getElementById("text").value + "8";

}
function button9(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "9";

	else

		document.getElementById("text").value = document.getElementById("text").value + "9";

}
function button0(){

	if(document.getElementById("text") == "")

		document.getElementById("text").value = "0";

	else

		document.getElementById("text").value = document.getElementById("text").value + "0";

}
function buttonplus(){

	Firstnumber = parseFloat(document.getElementById("text").value);

	document.getElementById("text").value = "";

	operation = "+";
}

function buttonminus(){

	Firstnumber = parseFloat(document.getElementById("text").value);

	document.getElementById("text").value = "";

	operation = "-";
}
function buttonori(){

	Firstnumber = parseFloat(document.getElementById("text").value);

	document.getElementById("text").value = "";

	operation = "*";
}
function buttonfra(){

	Firstnumber = parseFloat(document.getElementById("text").value);

	document.getElementById("text").value = "";

	operation = "/";
}
function egalc(){

	Secondnumber = parseFloat(document.getElementById("text").value);

	if(operation == "+")
	{
		egal = Firstnumber + Secondnumber;

		document.getElementById("text").value = egal;

		Firstnumber = egal;
	}
	if(operation == "-")
	{
		egal = Firstnumber - Secondnumber;

		document.getElementById("text").value = egal;

		Firstnumber = egal;
	}
	if(operation == "*")
	{
		egal = Firstnumber * Secondnumber;

		document.getElementById("text").value = egal;

		Firstnumber = egal;
	}
	if(operation == "/")
	{
		egal = Firstnumber / Secondnumber;

		document.getElementById("text").value = egal;

		Firstnumber = egal;
	}
}
function sterge(){
	document.getElementById("text").value = "";
}