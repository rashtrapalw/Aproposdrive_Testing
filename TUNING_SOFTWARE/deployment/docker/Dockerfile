# ── Stage 1: dependencies ─────────────────────────────────────────────────────
FROM python:3.11-slim AS builder
WORKDIR /build

RUN apt-get update && apt-get install -y --no-install-recommends gcc libffi-dev \
    && rm -rf /var/lib/apt/lists/*

COPY deployment/docker/requirements.txt .
RUN pip install --upgrade pip \
    && pip install --no-cache-dir --prefix=/install -r requirements.txt


# ── Stage 2: runtime ──────────────────────────────────────────────────────────
FROM python:3.11-slim AS runtime

RUN apt-get update && apt-get install -y --no-install-recommends curl libffi8 \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r app && useradd -r -g app -d /app app

WORKDIR /app

COPY --from=builder /install /usr/local

# Copy all app source (preserves the exact structure the imports expect)
COPY --chown=app:app app.py           ./
COPY --chown=app:app can_tuner3.py    ./
COPY --chown=app:app waveshare_can.py ./
COPY --chown=app:app remote_serial.py ./
COPY --chown=app:app auth.py          ./
COPY --chown=app:app templates/       ./templates/
COPY --chown=app:app static/          ./static/

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FLASK_ENV=production \
    PORT=5000

USER app
EXPOSE 5000
EXPOSE 8765

# Healthcheck matches /health route in app.py
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD curl -sf http://localhost:5000/health || exit 1

# IMPORTANT: workers must stay at 1. remote_serial.py creates a single
# module-level RelayServer() (the websocket listener on :8765) at import
# time. Each gunicorn worker is a separate OS process with its own Python
# interpreter, so --workers 2+ would spin up two independent relay servers,
# and an office relay connecting in could only ever reach one of them.
# Concurrency comes from --threads instead, which share the same process
# (and therefore the same relay_server instance).
CMD ["gunicorn", \
     "--bind", "0.0.0.0:5000", \
     "--workers", "1", \
     "--threads", "8", \
     "--timeout", "120", \
     "--access-logfile", "-", \
     "--error-logfile", "-", \
     "app:app"]
