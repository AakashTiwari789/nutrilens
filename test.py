import pickle
import numpy as np
model=pickle.load(open('model.pkl','rb'))
response=model.predict(np.reshape([200,19,0.2,2,0.03,0,0,0,90,1000,900,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0],(1,-1)))
print(response[0][0],response[0][1])