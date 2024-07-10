# use the offifical python runtime as the base image`
FROM python:3.9

# set the working directory inside the container
WORKDIR /code

# copy and set the required dependecies file to working directory
COPY ./requirements.txt ./

# install the dependencies
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# copy the rest of the application to working directory 
COPY . .

# run the development command
CMD ["fastapi", "dev", "main.py", "--host", "0.0.0.0", "--port", "8000"]