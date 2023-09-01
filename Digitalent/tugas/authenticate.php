<?php
function ob_file_callback($buffer)
{
  global $ob_file;
  fwrite($ob_file,$buffer);
}

$ob_file = fopen('test.txt','w');

ob_start('ob_file_callback');

	$postd = file_get_contents('php://input');
	$request = json_decode($postd);
	//print_r($request);
	$username = $request->username;
	$password = $request->password;
	  
   //echo($username);
	
	//echo($password);
	
	if( $username=="service" && $password == "service@123" )
	{
		//echo $result = "{'status':'1'}";
		echo $result=1;
	}
	else
	{
		//echo $result = '{"status":"2"}';
		echo $result=2;
	}
	echo json_encode($result);
	//$name= $request->name;
	//$city= $request->city;
	//echo json_encode($name);
	//print_r ($name);
	//print_r ($city);
	/*//$postdata = file_get_contents('php://input');
   //  $request = json_decode($postdata);
    //  $name = $postdata->name;
     // $city = $postdata->city;
	//Parse error:   in C:\xampp\htdocs\newaj\login.php on line 17<br />
	//echo $name;  */
	
	 
?>