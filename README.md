# Portfolio Landing Page - Prabowo Boemi Wijaya

A dynamic, modern, containerized portfolio landing page built with Flask, Tailwind CSS, and Docker.

---

## Directory Structure

```
finalcourse/
├── docker/                         # Infrastructure files
│   ├── Dockerfile                  # Container build config (python:3.9-slim)
│   └── docker-compose.yml          # Docker Compose orchestration
├── app/                            # Application source code
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css           # Custom animations & glow effects
│   │   └── js/
│   │       └── main.js             # Typing effect, scroll animations
│   ├── templates/
│   │   └── index.html              # Single-page HTML (Tailwind CDN)
│   └── main.py                     # Flask backend (routing)
├── requirements.txt                # Python dependencies
└── README.md                       # This file
```

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed and running
- (Optional) [Docker Compose](https://docs.docker.com/compose/install/) for the compose method

---

## Quick Start with Docker

### Build the image

```bash
docker build -t portfolio -f docker/Dockerfile .
```

### Run the container

```bash
docker run -d -p 8080:8080 --name portfolio-app portfolio
```

### Open in browser

```
http://localhost:8080
```

### Stop and remove

```bash
docker stop portfolio-app
docker rm portfolio-app
```

---

## Quick Start with Docker Compose

### Build and start

```bash
docker compose -f docker/docker-compose.yml up -d --build
```

### Stop

```bash
docker compose -f docker/docker-compose.yml down
```

---

## Local Development (without Docker)

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run the Flask development server

```bash
python app/main.py
```

The app will be available at `http://localhost:8080`.

---

## Tech Stack

| Layer          | Technology                     |
|----------------|--------------------------------|
| Backend        | Python 3.9 + Flask             |
| Frontend       | HTML5 + Tailwind CSS (CDN)     |
| Animations     | Custom CSS keyframes           |
| Interactivity  | Vanilla JavaScript             |
| Server (Prod)  | Gunicorn                       |
| Container      | Docker (python:3.9-slim)       |
| Port           | **8080**                       |

---

## Contact

- **Email:** boemiwijayaprabowo@gmail.com
- **LinkedIn:** [Prabowo Boemi Wijaya](https://www.linkedin.com/in/prabowo-boemi-wijaya-5b346a338)
- **GitHub:** [intiboemi](https://github.com/intiboemi)
- **WhatsApp:** [Chat](https://wa.me/628978331012)