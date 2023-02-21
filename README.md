# Dummy Pics
A generator of dummy images for your projects.

## Installation
Clone this project
```bash
git clone git@github.com:vcgtz/dummy-pics.git
```

Generate `.env` file
```bash
cd dummy-pics/
cp .env.example .env
```

Run it
```bash
npm run start
```

## Usage
The first page you'll see is this:

![image](https://user-images.githubusercontent.com/55886451/220244784-68bd3b3d-4e11-4c0c-9c8e-f6a703fde25e.png)

With simple but concise instructions to generate your images.

To generate a new image, you need to set a **WIDTH** and **HEIGHT**, and optionally, a **COLOR**.
```text
http://localhost:3000/dummy?width=800&height=600&color=5499C7
```

The previous URL will generate an image like this:
![image](https://user-images.githubusercontent.com/55886451/220245321-81e9e984-ec22-40e1-9e85-2d061c3840da.png)
