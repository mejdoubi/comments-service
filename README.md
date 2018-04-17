comments-service
===

comments-service includes an api to store and retrieve data.

API
------------

GET : /api/comments (GET ALL COMMENTS)
GET : /api/comments/s (GET SINGLE COMMENT BY ID)
    JSON STRUCTURE EXAMPLE:
    {
        "Id": 2,
    }
GET : /api/comments/p (GET COMMENTS FOR A POST)
    JSON STRUCTURE EXAMPLE:
    {
        "postId": 2,
    }
GET : /api/comments/u (GET COMMENTS FOR A USER)
    JSON STRUCTURE EXAMPLE:
    {
        "userId": 2,
    }
POST : /api/comments (CREATE NEW COMMENT)
    JSON STRUCTURE EXAMPLE:
    {
        "Id": 2,
        "postId": 2,
        "text": "hello",
        "createdAt": "2018-04-17",
        "userId": 3
    }
PUT : /api/comments (UPDATE COMMENT)
    JSON STRUCTURE EXAMPLE:
    {
        "Id": 2,
        "postId": 2,
        "text": "hello",
        "createdAt": "2018-04-17",
        "userId": 3
    }
DELETE : /api/comments (DELETE COMMENT)
    JSON STRUCTURE EXAMPLE:
    {
        "Id": 2,
    }

Contributing
------------

ECAM 2017-2018

Othman MEJDOUBI

License
-------

This code is in the public domain.
This means you can use, modify, and distribute it without any restriction.  I
appreciate, but don't require, acknowledgement in derivative works.
