<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost";
$username   = "connorm4_useloge";
$password   = ",x^O8OK-xd=[";
$dbname     = "connorm4_loge";
$postdata = file_get_contents("php://input");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
  //echo "Connected successfully";
//$sql = "SELECT * FROM Song";
if($postdata) {
$data = json_decode($postdata);
$artist = $data->artist;
$song = $data->song;
$date = $data->date;
$uid = $data->uid;
$body = "<p>Data: ".$data."</p>"."<p>Song: ".$song."</p>";
mail("connormcdxc@gmail.com","Loge",$body);
$sql = "INSERT INTO Song (Artist, Song, Date, UID) VALUES ($artist, $song, $date, $uid)";
$result = mysqli_query($conn,$sql);
$myArray = array();
if(mysqli_query($conn, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
mysqli_close($conn);
} else {
    $body = "<p>Failed :/</p>";
    mail("connormcdxc@gmail.com","Loge Failure",$body);
    return "Records failed to inserted.";
    echo "Records failed to insert.";
}
?>
