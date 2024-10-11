export const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:3001'],
  credentials: true, // Permitir el envío de cookies
  methods: ["GET", "POST", "PUT", "DELETE"],
};