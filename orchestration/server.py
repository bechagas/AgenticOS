import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        'src.main:app',
        host='localhost',
        port=9000,
        reload=True,
        reload_dirs=['.'],
        reload_excludes=['.venv', '__pycache__']
    )