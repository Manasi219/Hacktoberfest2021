<!DOCTYPE html>
<html>
<head>
	<title>Copy text from one input to another</title>
</head>
<body>

 <label> First Box </label>&nbsp&nbsp&nbsp&nbsp&nbsp

	<input type="text" name="first" id="first" placeholder="Enter the text">

	<br><br><br><br>

<label> Second Box </label>&nbsp
	<input type="text" name="second" id="second"><br><br><br><br>

	<input type="button" name="click" value="Click Me" onclick="copy()">
   

</body>
<script type="text/javascript">
	function copy()
   {
	  var n1 = document.getElementById('first');
	  var n2 = document.getElementById('second');
	  n2.value = n1.value;
}
</script>
</html>
