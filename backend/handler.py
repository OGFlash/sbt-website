"""
Lambda entry point.
FastAPI app is wrapped with Mangum so API Gateway HTTP API events
are translated into ASGI requests.
"""
from mangum import Mangum
from app.main import app

handler = Mangum(app, lifespan="off")
