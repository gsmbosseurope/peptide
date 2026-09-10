<?php
require_once __DIR__ . '/config.php';

function require_login_page() {
    if (empty($_SESSION['admin_logged_in'])) {
        header('Location: login.php');
        exit;
    }
}

function require_login_api() {
    if (empty($_SESSION['admin_logged_in'])) {
        header('Content-Type: application/json');
        http_response_code(401);
        echo json_encode(['error' => 'Not logged in.']);
        exit;
    }
}
