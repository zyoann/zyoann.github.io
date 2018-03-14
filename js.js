<SCRIPT type="text/javascript">
      function button_click() {
        window.parent.postMessage(document.getElementById("theMessage").value, "*");
		alert(document.getElementById("theMessage").value);
		var testV = 1;
		var pass1 = document.getElementById("theMessage").value;
		while (testV < 3) {
		if (pass1.toLowerCase() == "suede") {
		window.open('https://goo.gl/forms/gFB4twNbeSSE4k262');
		break ;
		}
		else if (pass1.toLowerCase() == "crunch") {
		window.open('https://goo.gl/forms/2NwNzDBcxkgSZbyy2');
		break ;
		}
		testV+=1;
		}
	}
</SCRIPT>