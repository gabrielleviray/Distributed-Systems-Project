# Distributed-Systems-Project

### Requirements
- Node
- Npm
- Python

### Steps to run locally
Start backend:
1. Navigate to the backend directory

2. Install virtualenv:

```
pip install virtualenv
```

3. Create a Python virtual environment

On Unix/MacOS:
```
python3 -m venv venv
```

On Windows:
```
py -m venv venv
```

4. Activate the virtual environment

On Unix/MacOS:
```
source venv/bin/activate
```

On Windows:
```
.\venv\Scripts\activate
```

5. Install dependencies:

```
pip install -r requirements.txt
```

6. Start backend server:

```
flask run
```

Start frontend on a different terminal:
1. Navigate to the frontend directory

2. Install dependencies:
```
npm install
```

3. Start frontend:
```
npm start
```