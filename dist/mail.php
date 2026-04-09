<?php
header("Access-Control-Allow-Origin: https://discoverytechhub.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Get and decode JSON body
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit();
}

// Sanitize inputs
$fullName = htmlspecialchars(trim($data['fullName'] ?? ''));
$email    = htmlspecialchars(trim($data['email'] ?? ''));
$phone    = htmlspecialchars(trim($data['phone'] ?? ''));
$service  = htmlspecialchars(trim($data['service'] ?? ''));
$budget   = htmlspecialchars(trim($data['budget'] ?? 'Not specified'));
$message  = htmlspecialchars(trim($data['message'] ?? ''));

// Validate required fields
if (!$fullName || !$email || !$phone || !$service || !$message) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email address"]);
    exit();
}

// Email settings
$to      = "info@discoverytechhub.com";
$subject = "New Quote Request from $fullName";

$body = "
You have received a new quote request from your website.

----------------------------------------
CONTACT DETAILS
----------------------------------------
Full Name   : $fullName
Email       : $email
Phone       : $phone

----------------------------------------
PROJECT DETAILS
----------------------------------------
Service     : $service
Budget      : $budget

----------------------------------------
MESSAGE
----------------------------------------
$message

----------------------------------------
This email was sent from discoverytechhub.com
";

$headers  = "From: noreply@discoverytechhub.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Message sent successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send email"]);
}
?>
