import secrets
import warnings
from typing import Annotated, Any, Literal
from pydantic import AnyUrl, BeforeValidator, HttpUrl, PostgresDsn, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing_extensions import Self
from pydantic_core import MultiHostUrl


def parse_cors(v: Any) -> list[str] | str:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list | str):
        return v
    raise ValueError(v)


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env", env_ignore_empty=True, extra="ignore"
    )

    # Ruta base de la API
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
    DOMAIN: str = "localhost"
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"

    # Propiedad computada para obtener el host del servidor basado en el entorno
    @computed_field
    @property
    def server_host(self) -> str:
        if self.ENVIRONMENT == "local":
            return f"http://{self.DOMAIN}"
        return f"https://{self.DOMAIN}"

    BACKEND_CORS_ORIGINS: Annotated[list[AnyUrl] | str, BeforeValidator(parse_cors)] = (
        []
    )

    PROJECT_NAME: str
    SENTRY_DSN: HttpUrl | None = None
    POSTGRES_SERVER: str
    POSTGRES_PORT: int = 5432
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str = ""
    POSTGRES_DB: str = ""

    @computed_field
    @property
    def SQLALCHEMY_DATABASE_URI(self) -> PostgresDsn:
        return MultiHostUrl.build(
            scheme="postgresql+psycopg",
            username=self.POSTGRES_USER,
            password=self.POSTGRES_PASSWORD,
            host=self.POSTGRES_SERVER,
            port=self.POSTGRES_PORT,
            path=self.POSTGRES_DB,
        )

    # Configuración del servidor SMTP para envío de correos electrónicos
    SMTP_TLS: bool = True
    SMTP_SSL: bool = False
    SMTP_PORT: int = 587
    SMTP_HOST: str | None = None
    SMTP_USER: str | None = None
    SMTP_PASSWORD: str | None = None
    EMAILS_FROM_EMAIL: str | None = None
    EMAILS_FROM_NAME: str | None = None

    # Tiempo de expiración del token de restablecimiento de contraseña en horas
    EMAIL_RESET_TOKEN_EXPIRE_HOURS: int = 48

    # Propiedad computada para verificar si el envío de correos electrónicos está habilitado
    @computed_field
    @property
    def emails_enabled(self) -> bool:
        return bool(self.SMTP_HOST and self.EMAILS_FROM_EMAIL)

    # Correo electrónico de prueba para el entorno de pruebas
    EMAIL_TEST_USER: str = "test@example.com"
    # Usuario y contraseña del primer superusuario
    FIRST_SUPERUSER: str
    FIRST_SUPERUSER_PASSWORD: str


# Instancia de configuración de settings
settings = Settings()
