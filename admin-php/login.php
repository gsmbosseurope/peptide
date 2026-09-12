<?php
require_once __DIR__ . '/config.php';

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    if (hash_equals(ADMIN_PASSWORD, $password)) {
        $_SESSION['admin_logged_in'] = true;
        header('Location: index.php');
        exit;
    }
    $error = 'Incorrect password.';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trusted Peptide Admin — Login</title>
  <style>
    :root { color-scheme: dark; }
    body {
      margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: #021024; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    form {
      background: #052659; padding: 40px; border-radius: 16px; width: 100%; max-width: 360px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    .login-logo { display: block; width: 56px; height: 56px; margin: 0 auto 16px; }
    h1 { color: #c1e8ff; font-size: 1.3rem; margin: 0 0 24px; text-align: center; }
    label { display: block; color: #7da0ca; font-size: 0.85rem; margin-bottom: 8px; }
    input {
      width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 8px;
      border: 1px solid rgba(125,160,202,0.3); background: rgba(2,16,36,0.5); color: #c1e8ff; font-size: 1rem;
      margin-bottom: 16px;
    }
    button {
      width: 100%; padding: 12px; border-radius: 8px; border: none; background: #c9a15a;
      color: #021024; font-weight: 700; font-size: 1rem; cursor: pointer;
    }
    .error { color: #e88a8a; font-size: 0.85rem; margin: -8px 0 16px; }
  </style>
</head>
<body>
  <form method="post">
    <svg class="login-logo" viewBox="60 60 480 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="dnaGradientLogin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#082B66"/><stop offset="45%" stop-color="#006DCE"/><stop offset="75%" stop-color="#08C9D9"/><stop offset="100%" stop-color="#087F91"/></linearGradient></defs>
      <g stroke-linecap="round">
        <path d="M125 75 H475 L420 130 H180 Z" fill="url(#dnaGradientLogin)"/>
        <path d="M280 130 C175 190 175 265 285 325 C395 385 395 460 285 520 C250 540 235 565 235 600" fill="none" stroke="url(#dnaGradientLogin)" stroke-width="48"/>
        <path d="M320 130 C425 190 425 265 315 325 C205 385 205 460 315 520 C350 540 365 565 365 600" fill="none" stroke="url(#dnaGradientLogin)" stroke-width="48"/>
        <g stroke="#19D7E5" stroke-width="15">
          <line x1="260" y1="205" x2="340" y2="205"/><line x1="235" y1="250" x2="365" y2="250"/><line x1="250" y1="295" x2="350" y2="295"/>
          <line x1="250" y1="410" x2="350" y2="410"/><line x1="235" y1="455" x2="365" y2="455"/><line x1="260" y1="500" x2="340" y2="500"/>
        </g>
      </g>
    </svg>
    <h1>Trusted Peptide Admin</h1>
    <?php if ($error): ?><div class="error"><?= htmlspecialchars($error) ?></div><?php endif; ?>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" autofocus required />
    <button type="submit">Log In</button>
  </form>
</body>
</html>
