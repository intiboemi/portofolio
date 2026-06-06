# ==========================================================================
# Dockerfile - Portfolio Landing Page
# Author: Prabowo Boemi Wijaya
# Base: python:3.9-slim | Port: 8080 | Server: Gunicorn
# ==========================================================================

FROM python:3.9-slim

LABEL maintainer="boemiwijayaprabowo@gmail.com"
LABEL description="Portfolio Landing Page - Prabowo Boemi Wijaya"
LABEL version="1.0"

# Prevent Python from buffering stdout/stderr (useful for Docker logs)
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /portfolio

# Install dependencies first (layer caching optimization)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app/ ./app/

# Expose port 8080 (NOT 3000)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8080/')" || exit 1

# Run with Gunicorn (production WSGI server)
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers", "2", "--access-logfile", "-", "app.main:app"]