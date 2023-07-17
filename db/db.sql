CREATE DATABASE CentroApoyoCampus;
USE CentroApoyoCampus;

CREATE TABLE areas_training (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    computadores INT NOT NULL,
    teclados INT NOT NULL,
    mouse INT NOT NULL,
    diademas INT NOT NULL
);

CREATE TABLE areas_review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    computadores INT NOT NULL,
    teclados INT NOT NULL,
    mouse INT NOT NULL,
    diademas INT NOT NULL
);

CREATE TABLE trainers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email_personal VARCHAR(100) NOT NULL,
    email_corporativo VARCHAR(100) NOT NULL,
    telefono_movil VARCHAR(20) NOT NULL,
    telefono_residencia VARCHAR(20),
    telefono_empresa VARCHAR(20) NOT NULL,
    telefono_movil_empresarial VARCHAR(20)
);

CREATE TABLE incidencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_reporte DATE NOT NULL,
    severidad ENUM('leve', 'moderada', 'critica') NOT NULL,
    area_training_id INT,
    area_review_id INT,
    trainer_id INT,
    FOREIGN KEY (area_training_id) REFERENCES areas_training(id),
    FOREIGN KEY (area_review_id) REFERENCES areas_review(id),
    FOREIGN KEY (trainer_id) REFERENCES trainers(id)
);