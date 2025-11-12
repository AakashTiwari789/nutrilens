from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import numpy as np
import pickle
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(title="🍎 Food Rater API")
model_load=pickle.load(open('model.pkl','rb'))
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Content(BaseModel):
    calories: float=0.0
    protein_g: float=0.0
    fat_g: float=0.0
    sat_fat_g: float=0.0
    trans_fat_g: float=0.0
    carbs_g: float=0.0
    fiber_g: float=0.0
    sugar_g: float=0.0
    sodium_mg: float=0.0
    potassium_mg: float=0.0
    calcium_mg: float=0.0
    has_processed_meat: float=0.0
    has_red_meat: float=0.0
    has_trans_fats: float=0.0
    has_artificial_colors: float=0.0
    has_preservatives: float=0.0
    preservative_count: float=0.0
    is_male_flag: float=0.0
    carcinogen_flag: float=0.0
    habitat_region: float=0.0
    age_group: float=0.0
    near_equator: float=0.0
    urbanicity: float=0.0
    bp_flag: float=0.0
    pregnancy_flag: float=0.0
    diabetes_flag: float=0.0
    cardiac_flag: float=0.0
    bmi_class: float=0.0

@app.post("/predict")
def predict(request: Content):
    features = np.array([[
        request.calories, request.protein_g, request.fat_g, request.sat_fat_g,
        request.trans_fat_g, request.carbs_g, request.fiber_g, request.sugar_g,
        request.sodium_mg, request.potassium_mg, request.calcium_mg,
        request.has_processed_meat, request.has_red_meat, request.has_trans_fats,
        request.has_artificial_colors, request.has_preservatives,
        request.preservative_count, request.is_male_flag, request.carcinogen_flag,
        request.habitat_region, request.age_group, request.near_equator,
        request.urbanicity, request.bp_flag, request.pregnancy_flag,
        request.diabetes_flag, request.cardiac_flag, request.bmi_class
    ]])
    features=np.reshape(features,(1,-1))
    res = model_load.predict(features)

    # Interpret prediction
    if isinstance(res[0], (list, np.ndarray)) and len(res[0]) >= 2:
        rating = float(res[0][0])
        disease_code = int(res[0][1])
    else:
        rating = float(res[0]) if np.isscalar(res[0]) else float(res[0][0])
        disease_code = -1

    disease_map = {
        0: "Cardiac issue",
        1: "Diabetes",
        2: "High cholesterol",
        3: "Hypertension",
        5: "Obesity"
    }

    return {"rating": rating, "predicted_disease": disease_map.get(disease_code, "None")}
@app.get('/health')
def health():
  return "server is running properly"
