@echo off
setlocal

REM === Create backend root ===
mkdir backend 2>nul
cd backend || exit /b

REM === Initialize npm ===
call npm init -y

REM === Update package.json to use server.js and ES modules ===
call node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json','utf8'));p.main='server.js';p.type='module';p.scripts.start='node server.js';fs.writeFileSync('package.json',JSON.stringify(p,null,2));"

REM === .gitignore ===
(
echo node_modules/
echo .env
echo dist/
) > .gitignore

REM === Root files ===
(
echo import express from "express";
echo import cors from "cors";
echo import cookieParser from "cookie-parser";
echo import { colorLog, errorLog } from "psgutil";
echo.
echo import env from "./src/config/env.js";
echo import authRoutes from "./src/routes/authRoutes.js";
echo.
echo const app = express^(^);
echo app.use^(cors^({
echo   origin: "http://localhost:5173",
echo   credentials: true,
echo }^)^);
echo app.use^(express.json^(^)^);
echo app.use^(cookieParser^(^)^);
echo app.use^(colorLog^);
echo.
echo app.use^("/auth", authRoutes^);
echo.
echo app.listen^(env.PORT, ^(^) =^> {
echo   console.log^(`Server running on port ${env.PORT}`^);
echo }^);
echo.
echo app.use^(errorLog^);
) > server.js

(
echo PORT=3000
echo DB_HOST=localhost
echo DB_USER=root
echo DB_PASSWORD=
echo DB_NAME=yourdatabase
echo JWT_SECRET=your_jwt_secret
) > .env

REM === Install packages ===
call npm install express cors dotenv argon2 mysql2 cookie-parser jsonwebtoken psgutil

REM === Create src structure ===
mkdir src 2>nul
pushd src

mkdir controllers utils middlewares config routes

(
echo import pool from "../config/db.js";
echo import argon2 from "argon2";
echo import { generateToken } from "../utils/token.js";
echo.
echo export async function register^(req, res, next^){
echo.
echo }
echo.
echo export async function login^(req, res, next^){
echo.
echo }
echo.
echo export async function logout^(req, res, next^){
echo   res.clearCookie^("token"^);
echo   res.json^({ message: "Logged out successfully" }^);
echo }
) > controllers\authController.js

(
echo import jwt from "jsonwebtoken";
echo import env from "../config/env.js";
echo.
echo export function generateToken^(payload^) {
echo   return jwt.sign^(payload, env.JWT_SECRET, { expiresIn: "1h" }^);
echo }
echo.
echo export function verifyToken^(token^){
echo   try {
echo     return jwt.verify^(token, env.JWT_SECRET^);
echo   } catch ^(error^){
echo     return null;
echo   }  
echo }
) > utils\token.js

(
echo import { verifyToken } from "../utils/token.js";
echo export function authenticateToken^(req, res, next^){
echo   const token = req.cookies.token;
echo   if ^(!token^) {
echo     return res.status^(401^).json^({ message: "Unauthorized" }^);
echo   }
echo   const decoded = verifyToken^(token^);
echo   if ^(!decoded^) {
echo     return res.status^(401^).json^({ message: "Unauthorized" }^);
echo   }
echo   req.user = decoded;
echo   next^(^);
echo }
) > middlewares\auth.js

(
echo import dotenv from "dotenv";
echo dotenv.config^(^);
echo.
echo const dbConfig = {
echo   host: process.env.DB_HOST,
echo   user: process.env.DB_USER,
echo   password: process.env.DB_PASSWORD,
echo   database: process.env.DB_NAME
echo }
echo.
echo const env = {
echo   PORT: process.env.PORT,
echo   dbConfig: dbConfig,
echo   JWT_SECRET: process.env.JWT_SECRET
echo }
echo export default env;
) > config\env.js

(
echo import mysql2 from "mysql2/promise";
echo import env from "./env.js";
echo.
echo const pool = mysql2.createPool^(env.dbConfig^);
echo export default pool;
) > config\db.js

(
echo import express from "express";
echo import { validateFieldCount, validateRequiredFields } from "psgutil";
echo import { register, login, logout } from "../controllers/authController.js";
echo import { authenticateToken } from "../middlewares/auth.js";
echo.
echo const router = express.Router^(^);
echo.
echo router.post^("/register", register^);
echo router.post^("/login", login^);
echo router.post^("/logout", authenticateToken, logout^);
echo.
echo export default router;
) > routes\authRoutes.js

popd

echo.
echo Backend structure created successfully.
pause