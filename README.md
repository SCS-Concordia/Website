## SCS Concordia Website (http://scsconcordia.ca)
### Requirements
* Python 2.7 (Python 3 is coming if someone fixes the [issue](https://github.com/SCS-Concordia/Website/issues/5)) Available at https://www.python.org/downloads/
* Django availabe through pip instructions can be found [here](https://www.djangoproject.com/download/)
* Git bash is required to commit changes to this repository which is cloned on the server.

### Download the code
* Navigate to the directory where you want the files using git bash
* Type the following `git clone https://github.com/SCS-Concordia/Website`

### Steps to run the server
* Navigate to the cloned root `/Website`. The folder should contain a `manage.py` file.
* Type the following command to run the server on port 80 `python manage.py runserver 80`.
* If port 80 is unauthorized run the bash in admin mode or super user mode.
* Navigate to `localhost` in your web browser to see the website
