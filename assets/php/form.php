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

    // pegar/obter valores do formulário
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // inserir valores na tabela
    $sql = "INSERT INTO nomeDaTabela (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error inserting data: " . $conn->error;
    }

    // fechar conexão
    $conn->close();

?>

