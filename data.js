var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-entrada",
      "name": "Exterior-Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.12485816956575313,
        "pitch": -0.005600385414894049,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.08713881310416838,
          "pitch": 0.05645573282535743,
          "rotation": 0,
          "target": "1-cocina-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina-comedor",
      "name": "Cocina-Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4293924613123572,
        "pitch": 0.07507557421763522,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.4067214804947294,
          "pitch": -0.018266377804046385,
          "rotation": 0,
          "target": "10-exterior-piscina"
        },
        {
          "yaw": 3.045182519352215,
          "pitch": 0.08632740849307652,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": -0.158322965844242,
          "pitch": 0.05671391240178636,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": -1.609658106695118,
          "pitch": 0.15390799001111333,
          "rotation": 0,
          "target": "0-exterior-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo",
      "name": "Pasillo.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8357929729941613,
        "pitch": 0.048536673595748425,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -1.4785574198735905,
          "pitch": 0.047378067048555295,
          "rotation": 0,
          "target": "1-cocina-comedor"
        },
        {
          "yaw": -1.8402613970354622,
          "pitch": 0.14801573513725685,
          "rotation": 0,
          "target": "4-bao-01"
        },
        {
          "yaw": -0.01897512501696852,
          "pitch": 0.14763514835999025,
          "rotation": 0,
          "target": "3-habitacin-invitados-01"
        },
        {
          "yaw": 0.2016430922726702,
          "pitch": 0.0877907616301421,
          "rotation": 0,
          "target": "5-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacin-invitados-01",
      "name": "Habitación-Invitados-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1302284134180436,
        "pitch": 0.01493436110638413,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.9248342078524754,
          "pitch": 0.04546917338197787,
          "rotation": 0,
          "target": "10-exterior-piscina"
        },
        {
          "yaw": 1.5732837884423176,
          "pitch": 0.2110890879784968,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao-01",
      "name": "Baño-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.374003249065586,
        "pitch": 0.042836862270295484,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -2.0551821212945924,
          "pitch": 0.12169797244241032,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-habitacin-principal",
      "name": "Habitación-Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.4600960728397325,
        "pitch": 0.1520589494468183,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 2.4152392247751244,
          "pitch": 0.0778669710583948,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": 0.06129846845758813,
          "pitch": 0.07212083035743255,
          "rotation": 0,
          "target": "10-exterior-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8350729190311448,
        "pitch": 0.05227026387234446,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.5002149452016535,
          "pitch": 0.13562014252812382,
          "rotation": 0,
          "target": "1-cocina-comedor"
        },
        {
          "yaw": 0.024930986686046097,
          "pitch": 0.14690676113971257,
          "rotation": 0,
          "target": "8-habitacin-invitados-02"
        },
        {
          "yaw": -0.16674993242337877,
          "pitch": 0.09944136142240723,
          "rotation": 0,
          "target": "9-sala-de-estar"
        },
        {
          "yaw": 1.848806907272012,
          "pitch": 0.17742095179479733,
          "rotation": 0,
          "target": "7-bao-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao-02",
      "name": "Baño-02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.04492435109597,
        "pitch": 0.09676070578275642,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -2.042508812596658,
          "pitch": 0.22597654811188939,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-habitacin-invitados-02",
      "name": "Habitación-Invitados-02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0833309704389986,
          "pitch": 0.06965639252658562,
          "rotation": 0,
          "target": "10-exterior-piscina"
        },
        {
          "yaw": -1.6614031484241316,
          "pitch": 0.15427628368851032,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala-de-estar",
      "name": "Sala de Estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5166722660204517,
        "pitch": -0.01652504559018908,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -2.6306502473778917,
          "pitch": 0.07656975721985759,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": 0.10279457148410209,
          "pitch": 0.13745247841473152,
          "rotation": 0,
          "target": "10-exterior-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-exterior-piscina",
      "name": "Exterior-Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.03994915092193985,
          "pitch": 0.02661937724785446,
          "rotation": 0,
          "target": "1-cocina-comedor"
        },
        {
          "yaw": 0.3725693233632814,
          "pitch": 0.02894719950381841,
          "rotation": 0,
          "target": "8-habitacin-invitados-02"
        },
        {
          "yaw": -0.4651276634076371,
          "pitch": 0.03372663438726775,
          "rotation": 0,
          "target": "3-habitacin-invitados-01"
        },
        {
          "yaw": 1.041607534670682,
          "pitch": 0.043797190636997385,
          "rotation": 0,
          "target": "9-sala-de-estar"
        },
        {
          "yaw": -1.1455355745543319,
          "pitch": 0.058843586793027924,
          "rotation": 0,
          "target": "5-habitacin-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
