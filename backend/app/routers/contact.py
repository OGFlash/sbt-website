from fastapi import APIRouter, HTTPException
from app.models.contact import ContactRequest, ContactResponse
import boto3
from botocore.exceptions import ClientError
import os

router = APIRouter()

SES_REGION = os.getenv("AWS_REGION", "us-east-1")
SES_SENDER = os.getenv("SES_SENDER_EMAIL")      # verified SES identity, e.g. info@yourdomain.com
SES_RECIPIENT = os.getenv("SES_RECIPIENT_EMAIL")  # e.g. caleb.yoder@yourdomain.com


@router.post("/contact", response_model=ContactResponse)
async def send_contact_email(payload: ContactRequest):
    if not SES_SENDER or not SES_RECIPIENT:
        raise HTTPException(status_code=500, detail="Email configuration missing")

    ses = boto3.client("ses", region_name=SES_REGION)

    subject = f"New Inquiry from {payload.name} — {payload.service}"
    body_text = (
        f"Name:          {payload.name}\n"
        f"Company:       {payload.company or 'N/A'}\n"
        f"Email:         {payload.email}\n"
        f"Phone:         {payload.phone or 'N/A'}\n"
        f"Service:       {payload.service}\n"
        f"Company Size:  {payload.companySize or 'N/A'}\n"
        f"Timeline:      {payload.timeline or 'N/A'}\n"
        f"How Heard:     {payload.howHeard or 'N/A'}\n\n"
        f"Message:\n{payload.message}"
    )
    body_html = f"""
    <html><body style="font-family:sans-serif;color:#333;">
      <h2 style="color:#001e33;">New Contact Form Submission</h2>
      <table cellpadding="6" style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td><strong>Name</strong></td><td>{payload.name}</td></tr>
        <tr><td><strong>Company</strong></td><td>{payload.company or 'N/A'}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:{payload.email}">{payload.email}</a></td></tr>
        <tr><td><strong>Phone</strong></td><td>{payload.phone or 'N/A'}</td></tr>
        <tr><td><strong>Service</strong></td><td>{payload.service}</td></tr>
        <tr><td><strong>Company Size</strong></td><td>{payload.companySize or 'N/A'}</td></tr>
        <tr><td><strong>Timeline</strong></td><td>{payload.timeline or 'N/A'}</td></tr>
        <tr><td><strong>How Heard</strong></td><td>{payload.howHeard or 'N/A'}</td></tr>
      </table>
      <h3 style="color:#001e33;margin-top:20px;">Message</h3>
      <p style="white-space:pre-wrap;">{payload.message}</p>
    </body></html>
    """

    try:
        ses.send_email(
            Source=SES_SENDER,
            Destination={"ToAddresses": [SES_RECIPIENT]},
            Message={
                "Subject": {"Data": subject, "Charset": "UTF-8"},
                "Body": {
                    "Text": {"Data": body_text, "Charset": "UTF-8"},
                    "Html": {"Data": body_html, "Charset": "UTF-8"},
                },
            },
            ReplyToAddresses=[payload.email],
        )
    except ClientError as e:
        raise HTTPException(status_code=500, detail=f"SES error: {e.response['Error']['Message']}")

    return ContactResponse(success=True, message="Message sent successfully")
