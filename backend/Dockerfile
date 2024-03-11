# pull python image
FROM python:3.10-alpine

#expose the port for api
EXPOSE 8000

# create working dir
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

#copy dependencies
COPY requirements.txt /app

# install dependencies
RUN pip install --upgrade pip
RUN pip3 install -r requirements.txt --no-cache-dir

#copy project
COPY . /app