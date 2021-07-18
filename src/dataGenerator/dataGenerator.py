import json
import random
import numpy as np
from numpy.core.numeric import NaN


def getTimeStamps(nTask):
    nTimeStamp = 2*nTask
    hours = random.sample(range(9, 20), nTimeStamp)
    minutes = random.sample(range(0, 59), nTimeStamp)

    clockTimes = []
    for i in range(len(hours)):
        timeStamp = f'{hours[i]}:{minutes[i]}'
        timeValue = hours[i] * 60 + minutes[i]
        clockTimes.append([timeStamp, timeValue])

    clockTimesSorted = sorted(clockTimes, key=lambda x: x[1])
    return clockTimesSorted


tasks = []
days = random.sample(range(1, 28), 20)
colors = [
    "#33364c",
    "#c51162",
    "#ff4350",
    "#ff4350",
    "#01acc2",
    "#81deea",
    "#ffd78c",
    "#ff959d",
    "#f06292",
    "#727689"
]

statuses = [
    "Upcoming",
    "InProgress",
    "Done",
    "Pending",
    "Failed",
    "Cancelled",
]

for day in days:
    nTaskMin = 1
    nTaskMax = 5
    nTask = np.random.randint(nTaskMin, nTaskMax)
    timeStamps = getTimeStamps(nTask)
    for i in range(0, 2*nTask, 2):
        tasks.append({
            "title": "task",
            "date": {"year": 2021, "month": 1, "day": day},
            "startingTime": timeStamps[i][0],
            "endingTime": timeStamps[i+1][0],
            "color": colors[np.random.randint(0, len(colors))],
            "status": statuses[np.random.randint(0, len(statuses))]
        })


outputJSON = open('./src/dataGenerator/output/dummyData.json', 'w+')
json.dump(tasks, outputJSON)
outputJSON.close()
