![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/bryangators/portfolio/.github%2Fworkflows%2Fdeploy.yml)
![GitHub License](https://img.shields.io/github/license/bryangators/portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/bryangators/portfolio)


# Project Overview

The portfolio page is a website that displays relevant information about myself and current software projects I am working on. The goal of this project is to have an easily accessible and flexible platform to quickly upload my latest projects.

# How to Install

### Prerequisites
You will need to have Docker and Docker Compose installed. You can do that [here](https://docs.docker.com/compose/install/).

### Setup Environment Variables
You will need to fill out Environment Variables. Make a copy of **.env.example** in root of project and call it **.env

```yaml
#Server Settings
DJANGO_DEBUG_MODE = True
DJANGO_SECRET_KEY = 'your django secret key'
DJANGO_ALLOWED_HOSTS="localhost 127.0.0.1 [::1]"
CORS_ALLOWED_ORIGINS="http://localhost:3000 http://127.0.0.1:3000"

#Email Settings
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@example.com'
EMAIL_HOST_PASSWORD = 'your email app password'
EMAIL_CONTACT_ALIAS = 'your-contact-email@example.com'

#Database Settings
DB_NAME = 'portfolio_projects'
DB_USER = 
DB_PASSWORD = 
DB_HOST = 
DB_PORT = 

POSTGRES_USER= 'same as above'
POSTGRES_PASSWORD= 'same as above'
POSTGRES_DB='portfolio_projects'
```

Next copy the **.env.example** file to .**env** in the frontend directory and fill in the following value.
```yaml
# api url for react app
VITE_API_BASE_URL = 'http://localhost:8000/api'
```


### Clone the Repository
~~~bash
git clone https://github.com/bryangators/portfolio.git
~~~

### Build the Project
Build and Run the Containers. Run this command from the root directory of the project.
~~~bash
docker-compose -f .\docker-compose.dev.yml up --build -d
~~~



### Create Superuser
Get the **portfolio-api** Container ID:
~~~bash
docker ps -a
~~~

![](https://bryankristofferson.s3.amazonaws.com/containerID.png)

While the containers are up and running connect to the API container:
~~~bash
docker exec -it <container-id> /bin/sh
~~~

Run the following command and fill out the prompts:
~~~bash
python manage.py createsuperuser
~~~

Follow prompts and exit container.

### Rebuild and Run
~~~bash
docker-compose -f .\docker-compose.dev.yml up --build -d
~~~

You should be up and running and you can add/modify projects by visiting the admin page.