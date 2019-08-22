var c1 = parseFloat("0");

var c2 = parseFloat("0");

var c3 = parseFloat("0");

var c4 = parseFloat("0");

var c5 = parseFloat("0");

var c6 = parseFloat("0");

var c7 = parseFloat("0");

var c8 = parseFloat("0");

var c9 = parseFloat("0");

var turn = parseFloat("1");

var player1 = parseFloat("0");

var player2 = parseFloat("0");

var robotmachine = checkwin();

function button1(){
	if(c1 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('1').value = "X";
			c1++;
		}
		else
		{
			document.getElementById('1').value = "O";
			c1++;
		}
		turn++;
	}
	checkwin()
}

function button2(){
	if(c2 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('2').value = "X";
			c2++;
		}
		else
		{
			document.getElementById('2').value = "O";
			c2++;
		}
		turn++;
	}
	checkwin()
}

function button3(){
	if(c3 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('3').value = "X";
			c3++;
		}
		else
		{
			document.getElementById('3').value = "O";
			c3++;
		}
		turn++;
	}
	checkwin()
}

function button5(){
	if(c5 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('5').value = "X";
			c5++;
		}
		else
		{
			document.getElementById('5').value = "O";
			c5++;
		}
		turn++;
	}
	checkwin()
}

function button4(){
	if(c4 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('4').value = "X";
			c4++;
		}
		else
		{
			document.getElementById('4').value = "O";
			c4++;
		}
		turn++;
	}
	checkwin()
}

function button6(){
	if(c6 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('6').value = "X";
			c6++;
		}
		else
		{
			document.getElementById('6').value = "O";
			c6++;
		}
		turn++;
	}
	checkwin()
}

function button7(){
	if(c7 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('7').value = "X";
			c7++;
		}
		else
		{
			document.getElementById('7').value = "O";
			c7++;
		}
		turn++;
	}
	checkwin()
}

function button8(){
		if(c8 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('8').value = "X";
			c8++;
		}
		else
		{
			document.getElementById('8').value = "O";
			c8++;
		}
		turn++;
	}
	checkwin()
}

function button9(){
	if(c9 == 0)
	{
		if(turn % 2 != 0)
		{
			document.getElementById('9').value = "X";
			c9++;
		}
		else
		{
			document.getElementById('9').value = "O";
			c9++;
		}
		turn++;
	}
	checkwin()
}
function reset(){

c1 = parseFloat("0");

c2 = parseFloat("0");

c3 = parseFloat("0");

c4 = parseFloat("0");

c5 = parseFloat("0");

c6 = parseFloat("0");

var c7 = parseFloat("0");

var c8 = parseFloat("0");

var c9 = parseFloat("0");

var turn = parseFloat("1");

	javascript:location.reload(true);
}
function checkwin(){
	if(document.getElementById('1').value != " " && document.getElementById('2').value != " " && document.getElementById('3').value != " ")
	{
		if(document.getElementById('1').value == document.getElementById('2').value && document.getElementById('2').value == document.getElementById('3').value)
		{
			if(document.getElementById('1').value == "X")
			{
				document.getElementById('1').style.backgroundColor="white";
				document.getElementById('1').style.border="2px solid black";

				document.getElementById('2').style.backgroundColor="white";
				document.getElementById('2').style.border="2px solid black";

				document.getElementById('3').style.backgroundColor="white";
				document.getElementById('3').style.border="2px solid black";

			}
			else
			{
				document.getElementById('1').style.backgroundColor="white";
				document.getElementById('1').style.border="2px solid black";

				document.getElementById('2').style.backgroundColor="white";
				document.getElementById('2').style.border="2px solid black";

				document.getElementById('3').style.backgroundColor="white";
				document.getElementById('3').style.border="2px solid black";

			}
			
		}
	}
	if(document.getElementById('4').value != " " && document.getElementById('5').value != " " && document.getElementById('6').value != " ")
	{
		if(document.getElementById('4').value == document.getElementById('5').value && document.getElementById('6').value == document.getElementById('5').value)
		{
			if(document.getElementById('4').value == "X")
			{
				document.getElementById('4').style.backgroundColor="white";
				document.getElementById('4').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('6').style.backgroundColor="white";
				document.getElementById('6').style.border="2px solid black";

			}
			else
			{
				document.getElementById('4').style.backgroundColor="white";
				document.getElementById('4').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('6').style.backgroundColor="white";
				document.getElementById('6').style.border="2px solid black";

			}
		}
	}
	if(document.getElementById('7').value != " " && document.getElementById('8').value != " " && document.getElementById('9').value != " ")
	{
		if(document.getElementById('7').value == document.getElementById('8').value && document.getElementById('9').value == document.getElementById('8').value)
		{
			if(document.getElementById('4').value == "X")
			{
				document.getElementById('7').style.backgroundColor="white";
				document.getElementById('7').style.border="2px solid black";

				document.getElementById('8').style.backgroundColor="white";
				document.getElementById('8').style.border="2px solid black";

				document.getElementById('9').style.backgroundColor="white";
				document.getElementById('9').style.border="2px solid black";

			}
			else
			{
				document.getElementById('7').style.backgroundColor="white";
				document.getElementById('7').style.border="2px solid black";

				document.getElementById('8').style.backgroundColor="white";
				document.getElementById('8').style.border="2px solid black";

				document.getElementById('9').style.backgroundColor="white";
				document.getElementById('9').style.border="2px solid black";

		
			}
		}
	}
	if(document.getElementById('1').value != " " && document.getElementById('4').value != " " && document.getElementById('7').value != " ")
	{
		if(document.getElementById('1').value == document.getElementById('4').value && document.getElementById('7').value == document.getElementById('4').value)
		{
			if(document.getElementById('1').value == "X")
			{

				document.getElementById('1').style.backgroundColor="white";
				document.getElementById('1').style.border="2px solid black";

				document.getElementById('4').style.backgroundColor="white";
				document.getElementById('4').style.border="2px solid black";

				document.getElementById('7').style.backgroundColor="white";
				document.getElementById('7').style.border="2px solid black";

			}
			else
			{
				document.getElementById('1').style.backgroundColor="white";
				document.getElementById('1').style.border="2px solid black";

				document.getElementById('4').style.backgroundColor="white";
				document.getElementById('4').style.border="2px solid black";

				document.getElementById('7').style.backgroundColor="white";
				document.getElementById('7').style.border="2px solid black";

			}
		}
	}
	if(document.getElementById('2').value != " " && document.getElementById('5').value != " " && document.getElementById('8').value != " ")
	{
		if(document.getElementById('2').value == document.getElementById('5').value && document.getElementById('8').value == document.getElementById('5').value)
		{
			if(document.getElementById('2').value == "X")
			{
				document.getElementById('2').style.backgroundColor="white";
				document.getElementById('2').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('8').style.backgroundColor="white";
				document.getElementById('8').style.border="2px solid black";

			}
			else
			{
				document.getElementById('2').style.backgroundColor="white";
				document.getElementById('2').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('8').style.backgroundColor="white";
				document.getElementById('8').style.border="2px solid black";

			}
		}
	}
	if(document.getElementById('3').value != " " && document.getElementById('6').value != " " && document.getElementById('9').value != " ")
	{
		if(document.getElementById('3').value == document.getElementById('6').value && document.getElementById('9').value == document.getElementById('3').value)
		{
			if(document.getElementById('3').value == "X")
			{
				document.getElementById('3').style.backgroundColor="white";
				document.getElementById('3').style.border="2px solid black";

				document.getElementById('6').style.backgroundColor="white";
				document.getElementById('6').style.border="2px solid black";

				document.getElementById('9').style.backgroundColor="white";
				document.getElementById('9').style.border="2px solid black";
			}
			else
			{
				document.getElementById('3').style.backgroundColor="white";
				document.getElementById('3').style.border="2px solid black";

				document.getElementById('6').style.backgroundColor="white";
				document.getElementById('6').style.border="2px solid black";

				document.getElementById('9').style.backgroundColor="white";
				document.getElementById('9').style.border="2px solid black";
			}
		}
	}
	if(document.getElementById('1').value != " " && document.getElementById('5').value != " " && document.getElementById('9').value != " ")
	{
		if(document.getElementById('1').value == document.getElementById('5').value && document.getElementById('5').value == document.getElementById('9').value)
		{
			if(document.getElementById('3').value == "X")
			{
				document.getElementById('1').style.backgroundColor="white";
				document.getElementById('1').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('9').style.backgroundColor="white";
				document.getElementById('9').style.border="2px solid black";

			}
			else
			{
				document.getElementById('1').style.backgroundColor="white";
				document.getElementById('1').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('9').style.backgroundColor="white";
				document.getElementById('9').style.border="2px solid black";

			}
		}
	}
	if(document.getElementById('3').value != " " && document.getElementById('5').value != " " && document.getElementById('7').value != " ")
	{
		if(document.getElementById('7').value == document.getElementById('5').value && document.getElementById('5').value == document.getElementById('3').value)
		{
			if(document.getElementById('3').value == "X")
			{
				document.getElementById('3').style.backgroundColor="white";
				document.getElementById('3').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('7').style.backgroundColor="white";
				document.getElementById('7').style.border="2px solid black";
			}
			else
			{
				document.getElementById('3').style.backgroundColor="white";
				document.getElementById('3').style.border="2px solid black";

				document.getElementById('5').style.backgroundColor="white";
				document.getElementById('5').style.border="2px solid black";

				document.getElementById('7').style.backgroundColor="white";
				document.getElementById('7').style.border="2px solid black";
			}
		}
	}
}