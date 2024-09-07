from datetime import datetime, timedelta, timezone
from typing import Any

import jwt
from passlib.context import CryptContext
from flask import current_app

# Configuración para bcrypt (manejo de contraseñas)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Algoritmo para firmar tokens JWT
ALGORITHM = "HS256"


# Crear un token de acceso (JWT)
def create_access_token(subject: str | Any, expires_delta: timedelta) -> str:
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(
        to_encode, current_app.config["SECRET_KEY"], algorithm=ALGORITHM
    )
    return encoded_jwt


# Verificar que la contraseña introducida es correcta comparando con el hash
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


# Obtener el hash de la contraseña
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
