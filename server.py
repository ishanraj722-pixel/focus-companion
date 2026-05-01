import os
import json
import requests
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# 1. Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)
CORS(app) # Allows the browser (HTML) to communicate with this backend

DATA_FILE = 'focus_history.json'

@app.route('/log_session', methods=['POST'])
def log_session():
    data = request.json
    
    # Add a server-side timestamp
    data['timestamp'] = datetime.now().isoformat()
    
    # Save the deep work data permanently
    with open(DATA_FILE, 'a') as f:
        f.write(json.dumps(data) + '\n')
        
    print(f"🔥 LOGGED: {data.get('duration_minutes', 0)} minutes of work.")
    return jsonify({"status": "success", "message": "Data secured."})

@app.route('/get_stats', methods=['GET'])
def get_stats():
    if not os.path.exists(DATA_FILE):
        return jsonify([])
    with open(DATA_FILE, 'r') as f:
        data = [json.loads(line.strip()) for line in f.readlines()]
    return jsonify(data)

@app.route('/critique', methods=['POST'])
def get_critique():
    data = request.json
    duration = data.get('duration_minutes', 0)
    tasks = ", ".join(data.get('tasks_in_progress', [])) or "Nothing specific"
    
    prompt = f"""
    You are the core AI of Mannak, a high-stakes technology company. Your current job is to act as a brutally honest, non-sugarcoated accountability coach for an engineering aspirant preparing for their April entrance exams. 
    The user just logged a deep work session lasting exactly {duration} minutes. 
    The tasks they claimed to be working on: {tasks}.
    
    If the duration is under 60 minutes, absolutely rip into them for lack of focus and remind them the competition is outworking them.
    If the duration is over 120 minutes, acknowledge the discipline but demand they push harder.
    Keep the response to a maximum of 2 punchy, aggressive, and highly critical sentences. No pleasantries.
    """
    
    API_KEY = os.environ.get("GEMINI_API_KEY")
    
    if not API_KEY:
        print("❌ ERROR: API Key missing. Did you create the .env file?")
        return jsonify({"critique": "SYSTEM ERROR: API Key missing from environment."})
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key={API_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    
    try:
        resp = requests.post(url, headers={'Content-Type': 'application/json'}, json=payload)
        resp_data = resp.json()
        critique = resp_data['candidates'][0]['content']['parts'][0]['text'].strip()
    except Exception as e:
        print(f"🔥 REST API CRASH: {e}")
        critique = "Network failure. Your weakness broke the AI connection."
        
    return jsonify({"critique": critique})

# --- NEW: MACHINE LEARNING DATA LOGGING ENDPOINT ---
@app.route('/log_training', methods=['POST'])
def log_training():
    data = request.json
    
    # 1 is 👍 (Vibe Hit), 0 is 👎 (Vibe Miss)
    score = data.get('score', 0) 
    mood = data.get('mood_text', 'unknown')
    
    # Add timestamp
    data['timestamp'] = datetime.now().isoformat()
    
    # Append to a new dataset file
    with open('training_data.json', 'a') as f:
        f.write(json.dumps(data) + '\n')
        
    status = "HIT 👍" if score == 1 else "MISS 👎"
    print(f"🧠 ML DATA LOGGED: '{mood}' -> Vibe {status}")
    
    return jsonify({"status": "success"})

# --- NEW: ONLINE MOOD ANALYSIS ENDPOINT ---
@app.route('/analyze_mood', methods=['POST'])
def analyze_mood():
    data = request.json
    mood_text = data.get('mood', '')
    
    prompt = f"""
    You are an expert music curator AI. The user's current mood or situation is: "{mood_text}".
    Determine the ideal acoustic parameters to match or enhance this vibe.
    You must output ONLY a valid JSON object. Do not include markdown code blocks.
    Format exactly like this:
    {{"bpm": 120, "energy": "high", "tone": "bright", "rhythm": "punchy"}}
    
    Rules:
    - "bpm" must be an integer between 60 and 180.
    - "energy" must be exactly one of: "low", "medium", or "high".
    - "tone" must be exactly one of: "muffled", "balanced", or "bright".
    - "rhythm" must be exactly one of: "smooth", "bouncy", or "punchy".
    
    Logic Guide:
    - Deep focus/study: low energy, muffled tone, smooth rhythm.
    - Aggressive grind/workout: high energy, bright tone, punchy rhythm.
    - Happy/Chill: medium energy, balanced tone, bouncy rhythm.
    """
    
    API_KEY = os.environ.get("GEMINI_API_KEY")
    if not API_KEY:
        return jsonify({"error": "API Key missing"}), 500
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key={API_KEY}"
    payload = {"contents": [{"parts": [{"text": prompt}]}]}
    
    try:
        resp = requests.post(url, headers={'Content-Type': 'application/json'}, json=payload)
        resp_data = resp.json()
        result_text = resp_data['candidates'][0]['content']['parts'][0]['text'].strip()
        
        if result_text.startswith('```json'):
            result_text = result_text[7:-3].strip()
        elif result_text.startswith('```'):
            result_text = result_text[3:-3].strip()
            
        parsed_json = json.loads(result_text)
        print(f"🧠 Mannak AI determined 4D target: {parsed_json}")
        return jsonify(parsed_json)
        
    except Exception as e:
        print(f"🔥 MOOD API CRASH: {e}")
        return jsonify({"error": "Failed to analyze mood"}), 500

if __name__ == '__main__':
    print("🚀 Booting local Mannak engine on port 5000...")
    app.run(port=5000, debug=True)