FROM --platform=$BUILDPLATFORM python:3.10-alpine AS builder
EXPOSE 8000
WORKDIR /app
COPY requirements.txt /app
RUN pip install --upgrade pip
RUN pip3 install -r requirements.txt --no-cache-dir
COPY . /app
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]