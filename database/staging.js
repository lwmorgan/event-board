
// Connect to our mongodb server/database
var conn = new Mongo("localhost"),

  db = conn.getDB("event-board");

// Drop the database
db.dropDatabase();

// Create the database
db = db.getSiblingDB('event-board');

// Create and Load the Groups collection
db.groups.insert({
  name: "titans",
  displayName: "GoWags Titans",
  banner: "We will have tryouts this coming up August the 4th. Contact coach for details.",
  adminPword: "admin",
  // logos: [],
  // activeLogo: {},
  seasons: [ {
    year: "2015",
    name: "Fall 11U",
    active: false,
    banner: "Inaugural season ended with championship!",
    events: [ {
        start: "2015-09-10",
        end: "2015-09-12",
        title: "Turn back the clock",
        location: "ECTB - Allentown, PA",
        comments: "First tournament for Titans!",
        // images: [],
        // activeImage: {},
        result: "quarterfinals",
        moments: []
      },
      {
          start: "2015-09-17",
          end: "2015-09-19",
          title: "Halloween Havoc",
          location: "In the Net - Palmyra, PA",
          comments: "Titans Champs for first time!",
          // images: [],
          // activeImage: {},
          result: "champs",
          moments: []
        },
        {
          start: "2015-09-30",
          end: "2015-10-02",
          title: "Winter Classic",
          location: "Red Land - Etters, PA",
          comments: "Fictitious...",
          // images: [],
          // activeImage: {},
          result: "semifinals",
          moments: []
        }
    ],
    members: [
      { firstName: "Adam", lastName: "Jones", school: "Bermudian Springs", position: "CF, SS" },
      { firstName: "Chris", lastName: "Davis", school: "Thurmont", position: "1B" },
      { firstName: "JJ", lastName: "Hardy", school: "Cedar Cliff", position: "SS, 3B" }
    ]
  },
  {
    year: "2016",
    name: "Spring 11U",
    active: true,
    banner: "First spring season! Lets have a great year.",
    events: [ {
        start: "2016-03-14",
        end: "2015-03-15",
        title: "All Nighter",
        location: "In the Net - Palmyra, PA",
        comments: "A long night...",
        // images: [],
        // activeImage: {},
        result: "finals",
        moments: []
      }
    ],
    members: [
      { firstName: "Adam", lastName: "Jones", school: "Bermudian Springs", position: "CF" },
      { firstName: "Chris", lastName: "Davis", school: "Thurmont", position: "1B" },
      { firstName: "JJ", lastName: "Hardy", school: "Cedar Cliff", position: "SS, 3B" },
      { firstName: "Mark", lastName: "Trumbo", school: "Thurmont", position: "OF" },
      { firstName: "Matt", lastName: "Wieters", school: "Mechanicsburg", position: "C" }
    ]
  }]
});
