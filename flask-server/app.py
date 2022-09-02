
from distutils.log import debug
import pickle
import re
from flask import Blueprint, jsonify, request
import requests
import json
from flask import Flask 
from flask_cors import CORS
app = Flask(__name__)
CORS(app)




def recommend(anime):
    index = animes[animes['title'] == anime].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_anime_names = []
   
    for i in distances[1:6]:

        recommended_anime_names.append(animes.iloc[i[0]].title)

    return recommended_anime_names


animes = pickle.load(open('anime_list1.pkl','rb'))
similarity = pickle.load(open('similarity1.pkl','rb'))
anime_list = animes['title'].values
@app.route('/send_anime',  methods=['POST', 'GET'])
def send_anime():
    anime_data=''
    if request.method == 'POST':
        anime_data = request.get_json()
        print(request.get_json())
  
    return anime_data['data']

@app.route('/api')
def index():
    return json.dumps(anime_list.tolist())

if __name__ == "__main__":
    app.run(debug=True)