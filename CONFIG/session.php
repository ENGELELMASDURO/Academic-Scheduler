 <?php
// =========================================
// Archivo: config/session.php
// Descripción: Inicia sesión y verifica usuario
// =========================================

// Iniciar sesión si no está iniciada
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Función para verificar si el usuario está logueado
function isLoggedIn() {
    return isset($_SESSION['user_id']) && isset($_SESSION['user_role']);
}

// Función para verificar el rol
function checkRole($rol_permitido) {
    if (!isLoggedIn()) {
        header('Location: /academicscheduler/login/index.php');
        exit();
    }
    
    if ($_SESSION['user_role'] !== $rol_permitido) {
        // Redirigir según su rol
        switch($_SESSION['user_role']) {
            case 'admin':
                header('Location: /academicscheduler/admin/index.php');
                break;
            case 'docente':
                header('Location: /academicscheduler/docente/index.php');
                break;
            case 'alumno':
                header('Location: /academicscheduler/alumno/index.php');
                break;
        }
        exit();
    }
}

// Función para obtener datos del usuario actual
function getUserData() {
    if (!isLoggedIn()) return null;
    
    return [
        'id' => $_SESSION['user_id'],
        'nombre' => $_SESSION['user_nombre'],
        'correo' => $_SESSION['user_email'],
        'rol' => $_SESSION['user_role']
    ];
}
?>