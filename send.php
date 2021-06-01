<?header('Content-type: application/json');
$testData = array("STATUS"=>"ERR","errors"=>array("unknown"=>"Неизвестная ошибка."));
$str_json = file_get_contents('php://input');
$data = json_decode($str_json,true);

$_POST["email"] = $data["body"]["email"];
if($_POST["email"]) {

	if($_POST["email"] == "test@test.ru") {
		$testData = array("STATUS"=>"ERR","errors"=>array("connect"=>"Превышено количество отправок."));
	} elseif($_POST["email"] == "example@mail.ru") {
		$testData = array("STATUS"=>"ERR","errors"=>array("email"=>"Невалидный email."));
	} elseif($_POST["email"] == "multi@error.ru") {
		$testData = array("STATUS"=>"ERR","errors"=>array("connect"=>"Превышено количество отправок.","more"=>"Еще какая-то ошибка"));
	} elseif($_POST["email"] == "server@error.ru") {
		die();
	}else {
		$testData = array("STATUS"=>"OK");
	}

} else {
	
}

echo json_encode($testData);

?>