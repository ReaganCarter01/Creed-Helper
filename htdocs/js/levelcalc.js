function calc()
				     {
				        var n1 = parseFloat(document.getElementById('n1').value);
			          var oper = document.getElementById('operators').value;

									  if(oper === '='){
                    document.getElementById('result').value = n1*n1*n1;
				            }
				            if(oper === '-'){
											document.getElementById('result').value = Math.cbrt(n1);
				            }

				         }
