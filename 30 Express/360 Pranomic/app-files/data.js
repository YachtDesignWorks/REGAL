var APP_DATA = {
  "scenes": [
    {
      "id": "0-v-birth",
      "name": "V-BIRTH",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5519698188828244,
        "pitch": 0.2149136450179423,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": 1.2011316116360984,
          "pitch": 0.2151259498413154,
          "rotation": 0,
          "target": "1-vanity"
        },
        {
          "yaw": 1.717248767420375,
          "pitch": 0.22049056120787824,
          "rotation": 0,
          "target": "2-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vanity",
      "name": "VANITY",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.3208254824585826,
        "pitch": 0.7533829122495206,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": -2.211493530170287,
          "pitch": 0.7347753608665712,
          "rotation": 0,
          "target": "2-head"
        },
        {
          "yaw": -0.795180021092694,
          "pitch": 0.4041975737464707,
          "rotation": 0,
          "target": "0-v-birth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head",
      "name": "HEAD",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.56897887649943,
        "pitch": 0.7673094123243871,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": 2.2031879247167394,
          "pitch": 0.2833211975083465,
          "rotation": 0,
          "target": "1-vanity"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "30 EXPRESS - INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
