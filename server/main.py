from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
async def root():
  return {"message": "Hello, World!"}