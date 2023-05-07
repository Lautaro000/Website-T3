Paquetes previos a instalar

Installar driver ODBC MSSQL Version 17
https://go.microsoft.com/fwlink/?linkid=2223304


cd backend\
pip install djangorestframework
pip install django-cors-headers
pip install Pillow
pip install mysql-connector-python
pip install sqlserver
pip install mssql-django

Comando para levantar el backend

python manage.py runserver

Creacion de la base de datos

python manage.py migrate