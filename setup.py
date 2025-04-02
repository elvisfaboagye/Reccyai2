import subprocess
import sys
import os

def setup_environment():
    print("Setting up Reccy AI development environment...")
    
    # Create virtual environment
    print("\nCreating virtual environment...")
    subprocess.run([sys.executable, "-m", "venv", "venv"])
    
    # Activate virtual environment
    if os.name == 'nt':  # Windows
        activate_script = os.path.join("venv", "Scripts", "activate")
    else:  # Unix/Linux
        activate_script = os.path.join("venv", "bin", "activate")
    
    # Install dependencies
    print("\nInstalling Python dependencies...")
    pip_cmd = [os.path.join("venv", "Scripts" if os.name == 'nt' else "bin", "pip")]
    subprocess.run(pip_cmd + ["install", "-r", "requirements.txt"])
    
    # Download spaCy model
    print("\nDownloading spaCy model...")
    subprocess.run([os.path.join("venv", "Scripts" if os.name == 'nt' else "bin", "python"),
                   "-m", "spacy", "download", "en_core_web_sm"])
    
    print("\nSetup complete! To start the server:")
    print("1. Activate virtual environment:")
    print(f"   source {activate_script}")
    print("2. Run the Flask application:")
    print("   python backend/app.py")

if __name__ == "__main__":
    setup_environment()
