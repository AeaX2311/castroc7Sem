USE abd
GO

CREATE TABLE frase(
	id_frase INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	frase VARCHAR(MAX) NOT NULL,
	fecha_creacion DATE NOT NULL DEFAULT GETDATE()
);