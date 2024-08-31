from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

# app middlewares 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# root api 
@app.get("/api")
async def root():
  return {"message": "Hello, Fire!"}


