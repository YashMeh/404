define({ "api": [
  {
    "type": "get",
    "url": "/admin/delete/{team}",
    "title": "delete teams",
    "name": "delete_teams",
    "group": "admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "team",
            "description": "<p>team name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "[\n    {\n        \"_id\": \"5bb8fa2bd0cbc35fbd713e42\",\n        \"name\": \"renegades\",\n        \"ppl\": [\n            {\n                \"_id\": \"5bb8fa2bd0cbc35fbd713e43\",\n                \"name\": \"angad\",\n                \"email\": \"angadsharma1016@gmail.com\",\n                \"rollno\": \"17BCE2009\",\n                \"roomno\": \"Q753\",\n                \"phone\": \"9971673330\"\n            }\n        ],\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "login admin",
    "name": "login_admin",
    "group": "admin",
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": "{\n\t\"username\":\"root\",\n\t\"password\":\"toor\"\n}",
          "type": "json"
        },
        {
          "title": "response",
          "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6ImFkbWluIiwiaWF0IjoxNTM4ODUwMjI2fQ.ZsKJ91xRf_LOt4SEPsH7U6BWt552oTyb7ptrfcFCabQ\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/admin/view",
    "title": "view teams",
    "name": "view_teams",
    "group": "admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "response",
          "content": "[\n    {\n        \"_id\": \"5bb8fa2bd0cbc35fbd713e42\",\n        \"name\": \"renegades\",\n        \"ppl\": [\n            {\n                \"_id\": \"5bb8fa2bd0cbc35fbd713e43\",\n                \"name\": \"angad\",\n                \"email\": \"angadsharma1016@gmail.com\",\n                \"rollno\": \"17BCE2009\",\n                \"roomno\": \"Q753\",\n                \"phone\": \"9971673330\"\n            }\n        ],\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/teams/join",
    "title": "join a team",
    "group": "all",
    "name": "join_a_team",
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": "{\n\t\t\t\t\"name\": \"dhruv\",\n                \"email\": \"angadsharma101@gmail.com\",\n                \"rollno\": \"17BCE2000\",\n                \"roomno\": \"Q753\",\n                \"phone\": \"9971673330\",\n                \"team\":\"renegades\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "all"
  },
  {
    "type": "post",
    "url": "/teams/add",
    "title": "add a team",
    "name": "add_a_team",
    "group": "team",
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": "{\n\t\"name\":\"renegades\",\n\t\"ppl\":[\n\t\t{\n\t\t\t\"name\":\"angad\",\n\t\t\t\"email\":\"angadsharma1016@gmail.com\",\n\t\t\t\"rollno\":\"17BCE2009\",\n\t\t\t\"roomno\":\"Q753\",\n\t\t\t\"phone\":\"9971673330\"\n\t\t}\n\t]\n}",
          "type": "json"
        },
        {
          "title": "response",
          "content": "{\n    \"data\": {\n        \"_id\": \"5bb8fa2bd0cbc35fbd713e42\",\n        \"name\": \"renegades\",\n        \"ppl\": [\n            {\n                \"_id\": \"5bb8fa2bd0cbc35fbd713e43\",\n                \"name\": \"angad\",\n                \"email\": \"angadsharma1016@gmail.com\",\n                \"rollno\": \"17BCE2009\",\n                \"roomno\": \"Q753\",\n                \"phone\": \"9971673330\"\n            }\n        ],\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "post",
    "url": "/team/addPitch2",
    "title": "add final pitch",
    "name": "add_final_pitch",
    "permission": [
      {
        "name": "team"
      }
    ],
    "group": "team",
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": "{\n\t\"data\":\"is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "post",
    "url": "/team/addPitch1",
    "title": "add initital pitch",
    "name": "add_initital_pitch",
    "group": "team",
    "permission": [
      {
        "name": "team"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": "{\n\t\"data\":\"is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "post",
    "url": "/team/addRepo",
    "title": "add repo",
    "name": "add_repo",
    "permission": [
      {
        "name": "team"
      }
    ],
    "group": "team",
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": "{\n\t\"data\":\"https://github.com/angadsharma1016/event_portal.git\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "post",
    "url": "/team/login",
    "title": "login team",
    "name": "login_team",
    "group": "team",
    "parameter": {
      "examples": [
        {
          "title": "request",
          "content": " {\n\t\"username\":\"renegades\",\n\t\"password\":\"5bb8fa2bd0cbc35fbd713e42\"\n}",
          "type": "json"
        },
        {
          "title": "response",
          "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6InRlYW0iLCJuYW1lIjoicmVuZWdhZGVzIiwiaWF0IjoxNTM4ODUxNTU4fQ.BaT9c96LhZeh8KQxWXtmAnI5znhHCEYopGIRLGBYOTM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "get",
    "url": "/teams/deluser/:user",
    "title": "unregister member",
    "group": "team",
    "name": "unregister_member",
    "permission": [
      {
        "name": "team"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "get",
    "url": "/teams/unregister",
    "title": "unregister team",
    "group": "team",
    "name": "unregister_team",
    "permission": [
      {
        "name": "team"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  },
  {
    "type": "get",
    "url": "/teams/view",
    "title": "view team",
    "group": "team",
    "name": "view_team",
    "permission": [
      {
        "name": "team"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "response",
          "content": " {\n    \"_id\": {\n        \"$oid\": \"5bc387bbd04ef644519d8b24\"\n    },\n    \"name\": \"angad\",\n    \"ppl\": [\n        {\n            \"_id\": {\n                \"$oid\": \"5bc387bbd04ef644519d8b27\"\n            },\n            \"name\": \"a\",\n            \"email\": \"a\",\n            \"rollno\": \"a\",\n            \"roomno\": \"a\",\n            \"phone\": \"a\"\n        },\n        {\n            \"_id\": {\n                \"$oid\": \"5bc387bbd04ef644519d8b26\"\n            },\n            \"name\": \"a\",\n            \"email\": \"a\",\n            \"rollno\": \"a\",\n            \"roomno\": \"a\",\n            \"phone\": \"a\"\n        }\n    ],\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/teams.js",
    "groupTitle": "team"
  }
] });
