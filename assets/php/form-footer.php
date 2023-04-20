<?php

    // informações do banco de dados
    $servername = "localhost"; 
    $username = "userName";
    $password = "password";
    $dbname = "dbname";

    // criar conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // verificar conexão
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // obter valores do formulário
    $email = $_POST["email"];
    $message = $_POST["message"];

    // inserir valores na tabela
    $sql = "INSERT INTO nomeDaTabela (email, message) VALUES ('$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error inserting data: " . $conn->error;
    }

    // fechar conexão
    $conn->close();

?>