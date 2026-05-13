from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import contact
import os

app = FastAPI(title="SBT API", version="1.0.0")

# ---------------------------------------------------------------------------
# CORS — allow Vite dev server locally; in prod CloudFront handles origin.
# ---------------------------------------------------------------------------
origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api")


@app.get("/api/health")
def health():
    return {"status": "ok"}
