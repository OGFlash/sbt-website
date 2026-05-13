from pydantic import BaseModel, EmailStr
from typing import Optional


class ContactRequest(BaseModel):
    name: str
    company: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    service: str
    companySize: Optional[str] = None
    timeline: Optional[str] = None
    message: str
    howHeard: Optional[str] = None


class ContactResponse(BaseModel):
    success: bool
    message: str
