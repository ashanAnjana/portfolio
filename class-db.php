<?php 

class DB {
    private $dbHost = "localhost";
    private $dbUsername = "root";
    private $dbPassword ="";
    private $dbName = "protfoliodb";


    public function __construct()
    {
        if(!isset($this->db)){
            $conn = new mysqli($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
            if($conn->connect_error){
                die("Failed to connect with MySQL: " . $conn->connect_error);
            }else {
                $this->db = $conn;
            }
        }
    }

    public function is_token_empty() {
        $result = $this->db->query("SELECT id FROM google_oauth WHERE provider = 'google'");
        if($result->num_rows) {
            return false;
        }

        return true;
    }

    public function get_access_token() { 
        $sql = $this->db->query("SELECT provider_value FROM google_oauth WHERE provider = 'google'");
        $result = $sql->fetch_assoc();
        return json_encode($result['provider_value']);
    }

    public function get_refersh_token() {
        $result = $this->get_access_token();

        $decode_data = json_decode($result, true);
        $token_data = json_decode($decode_data, true);
       return $token_data["refresh_token"];
    }

    public function update_access_token($token) {
        if($this->is_token_empty()) {
            $this->db->query("INSERT INTO google_oauth(provider, provider_value) VALUES('google', '$token')");
        } else {
            $this->db->query("UPDATE google_oauth SET provider_value = '$token' WHERE provider = 'google'");
        }
    }
}
?>