# 🦷 ShiftManager – Sistema de Turnos para Consultorio Odontológico

ShiftManager es una aplicación web full-stack desarrollada como proyecto autodidacta con enfoque MVP. Permite a pacientes reservar turnos, consultar su historial y cancelarlos, mientras que los administradores pueden gestionar servicios, turnos y usuarios. La validación de horarios y la experiencia del usuario han sido prioridades clave en este desarrollo.

## 🚀 Deploy online

🔗 Próximamente: Frontend (Vercel) | Backend (Render)

## 🛠️ Tecnologías utilizadas

### Frontend

- TypeScript
- Next.js
- React.js
- CSS Modules
- Redux Toolkit
- SweetAlert2

### Backend

- Node.js
- Express
- PostgreSQL
- TypeORM

### Otras herramientas

- JWT (en desarrollo, para autenticación robusta)
- Context API (para manejo de sesión y turnos)
- React Hooks

## 🔐 Funcionalidades principales

- Autenticación de usuarios (frontend/backend con validaciones personalizadas)
- Registro e inicio de sesión
- Panel de usuario con:
  - Historial de turnos
  - Reserva de nuevos turnos
  - Cancelación de turnos
- Validación en tiempo real de disponibilidad horaria
- Control de superposición de turnos
- SweetAlert2 para una UX clara y moderna
- Panel administrativo (backend) con:
  - Gestión de turnos
  - Gestión de usuarios
  - Gestión de servicios
- Diseño responsive adaptable a dispositivos móviles

## 📦 Instalación local

1. Cloná este repositorio:

git clone https://github.com/AleFalces/ShiftManager-Proyect

2. Instalá las dependencias:

- Front:
  -cd ./front
  -cd ./Turns-Proyect-Front
  -npm install

- Back: .cd ./back npm install

3. Configurá las variables de entorno. Renombrá .env.example a .env y completá los valores correspondientes: Encontraras un archivo .env.exaple en la carpeta front y en la carpeta back respetcivamente.

4. Ejecutá el servidor de desarrollo:
   -Front: npm run dev
   -Back: npm start

   ## 📦 Futuras mejoras

- Implementación completa de JWT para autenticación segura
- Panel de administración con interfaz visual integrada
- Testing automatizado (unitarios y de integración)
- Reprogramación automática de turnos
- Integración con calendario externo (Google Calendar u otros)
- Migración del frontend a TailwindCSS
- Testing automatizado (unitarios y de integración)
